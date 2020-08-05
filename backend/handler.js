const SES = require('aws-sdk').SES;
const client = new SES({ region: 'us-west-2' });

function send(email, subject, message) {
  const fullSubject = `[PORTFOLIO SITE] Message from ${email}: ${subject}`;
  const params = {
    Source: 'louistheleon@gmail.com',
    Destination: {
      ToAddresses: ['louistheleon@gmail.com'],
    },
    Message: {
      Subject: {
        Data: fullSubject,
      },
      Body: {
        Text: {
          Data: message,
        },
      },
    },
    ReplyToAddresses: [email],
  };
  return client.sendEmail(params).promise();
}

module.exports.sendEmail = async event => {
  try {
    const body = JSON.parse(event.body);
    const { email, subject, message } = body;
    await send(email, subject, message);
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent!' }),
    };
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
