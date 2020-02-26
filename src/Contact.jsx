import React, { useState, useCallback } from 'react';
import './styles/Contact.css';

export default ({ reference }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const handleChange = useCallback(
    fieldName => e => {
      switch (fieldName) {
        case 'email':
          setEmail(e.target.value);
          break;
        case 'subject':
          setSubject(e.target.value);
          break;
        case 'body':
          setBody(e.target.value);
          break;
      }
    },
    [setEmail, setSubject, setBody]
  );

  const handleSubmit = useCallback(() => {
    console.log('submitting!');
  }, [email, subject, [body]]);
  return (
    <div id="contact" ref={reference}>
      <h1>Contact</h1>
      <div className="title-underline" />
      <div className="section-body-wrap">
        <p>
          Questions? Interested in working together? Leave a message and your
          email address and I'll get back to you ASAP!
        </p>
        <input
          type="text"
          value={email}
          onChange={handleChange('email')}
          placeholder="Your email address"
        />
        <input
          type="text"
          value={subject}
          onChange={handleChange('subject')}
          placeholder="Subject"
        />
        <textarea
          value={body}
          onChange={handleChange('body')}
          placeholder="Email body"
        />
        <div className="contact-submit">SEND EMAIL</div>
        <p>
          or, just email me at{' '}
          <a href="mailto:louistheleon@gmail.com">louistheleon@gmail.com</a>
        </p>
      </div>
    </div>
  );
};
