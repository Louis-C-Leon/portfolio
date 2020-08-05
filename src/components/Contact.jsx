import React, { useState, useCallback } from 'react';
import axios from 'axios';
import withHover from './withHover.jsx';
import '../styles/Contact.scss';

const SendButton = ({ sendEmail, ...rest }) => (
  <a onClick={sendEmail} className="hover-item bold-link" {...rest}>
    SEND
  </a>
);
const HoverSendButton = withHover(SendButton);

const EmailLink = props => (
  <a
    style={{ padding: '0px 16px' }}
    href="mailto:louistheleon@gmail.com"
    className="hover-item"
    {...props}>
    louistheleon@gmail.com
  </a>
);
const HoverEmailLink = withHover(EmailLink);

export default ({ reference }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [complete, setComplete] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [networkError, setNetworkError] = useState(false);
  const handleChange = useCallback(
    fieldName => e => {
      switch (fieldName) {
        case 'email':
          setEmail(e.target.value);
          break;
        case 'subject':
          setSubject(e.target.value);
          break;
        case 'message':
          setMessage(e.target.value);
          break;
      }
    },
    [setEmail, setSubject, setMessage]
  );

  const validateFields = useCallback(
    (email, subject, message) => {
      setEmailError('');
      setSubjectError('');
      setMessageError('');
      let valid = true;
      const regexp = new RegExp('^.{1,}@.{1,}..{1,}$');
      if (!email) {
        setEmailError('Please leave your email address');
        valid = false;
      } else if (!regexp.test(email)) {
        setEmailError('Enter a valid email address');
        valid = false;
      }
      if (!subject) {
        setSubjectError('Please enter a subject');
        valid = false;
      }
      if (!message) {
        setMessageError('Please leave a message');
        valid = false;
      }
      return valid;
    },
    [setEmailError, setSubjectError, setMessageError]
  );

  const sendEmail = useCallback(() => {
    const valid = validateFields(email, subject, message);
    if (!valid) return;
    const endpoint =
      'https://189i2v8tcg.execute-api.us-west-2.amazonaws.com/dev/';
    axios
      .post(endpoint, { email, subject, message })
      .then(res => setComplete(true))
      .catch(e => setNetworkErrorError(true));
  }, [email, subject, message, setEmail, setNetworkError]);

  return (
    <div className="light-theme" id="contact" ref={reference}>
      <h1>Contact</h1>
      <div className="title-underline" />
      <div className="section-body-wrap">
        {complete ? (
          <p className="complete">Thank you!</p>
        ) : networkError ? (
          <p className="network-error">Thank you!</p>
        ) : (
          <>
            <p>
              Leave a message and your email address and I'll get back to you
              ASAP!
            </p>
            <div className="input-wrap">
              <input
                type="text"
                value={email}
                onChange={handleChange('email')}
                placeholder="Your email address"
              />
              <p className="field-error">{emailError}</p>
            </div>
            <div className="input-wrap">
              <input
                type="text"
                value={subject}
                onChange={handleChange('subject')}
                placeholder="Subject"
              />
              <p className="field-error">{subjectError}</p>
            </div>
            <div className="input-wrap">
              <textarea
                value={message}
                onChange={handleChange('message')}
                placeholder="Message"
              />
              <p className="field-error">{messageError}</p>
            </div>
            <HoverSendButton sendEmail={sendEmail} />
          </>
        )}

        <p>
          or, just contact me at <HoverEmailLink />
        </p>
      </div>
    </div>
  );
};
