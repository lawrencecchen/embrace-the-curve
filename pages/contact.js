import { useState } from 'react';
import styled from 'styled-components';

import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

import { device } from '../components/mediaQueries';

import * as yup from 'yup';
import Form from 'react-formal/Form';
import Submit from 'react-formal/Submit';

const ContactWrapper = styled.section`
  background-color: var(--eton-blue);
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    padding: 50px 20px;
  }
`;

const FormWrapper = styled.div`
  background-color: var(--cultured);
  padding-bottom: 42px;
  /* width: min-content; */
  max-width: 892px;

  @media ${device.tablet} {
    padding: 60px 62px;
  }
`;

const Heading = styled.h1`
  text-align: left;
  font-size: 51px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: center;
  white-space: nowrap;

  @media ${device.laptop} {
    text-align: left;
    margin-bottom: 20px;
  }
`;

const SubHeading = styled.h2`
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;

  @media ${device.tablet} {
    text-align: left;
  }
`;

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return response.json();
}

const schema = yup.object({
  senderName: yup.string().required('Please include your name.'),
  email: yup
    .string()
    .email('Emails must contain an @ and a domain')
    .required('Email is required.'),
  // message: yup.string().required('Please include a message.'),
});

const Contact = () => {
  const [values, setValues] = useState({
    senderName: '',
    email: '',
    message: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    postData('/api/contact-me', { values })
      .then((data) => {
        clearForm();
        if (data.success) {
          setFormSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const clearForm = () => {
    setValues({
      senderName: '',
      email: '',
      message: '',
    });
  };

  const onBlurThenChangeAndBlur = (meta) => ({
    change: !meta.valid,
    blur: true,
  });

  return (
    <>
      <ContactWrapper id="contact-me">
        {loading ? <div>Please wait...</div> : ''}
        {formSuccess ? (
          <FormWrapper>
            <SubHeading>
              Thank you for your message! Look for our reply in a few days.
            </SubHeading>
          </FormWrapper>
        ) : (
          <FormWrapper>
            <Heading>Contact me</Heading>
            <SubHeading>
              Let’s get in touch. We would love to hear your message!
            </SubHeading>
            <Form
              schema={schema}
              onSubmit={handleSubmit}
              style={{ paddingLeft: '12px' }}
            >
              <TextField
                type="text"
                label="Your Name"
                name="senderName"
                onChange={handleInputChange}
                value={values.senderName}
                maxLength="30"
                required
                validateOn={onBlurThenChangeAndBlur}
              />
              <TextField
                label="Email"
                name="email"
                onChange={handleInputChange}
                value={values.email}
                maxLength="50"
                type="email"
                validateOn={onBlurThenChangeAndBlur}
                required
              />
              <TextArea
                label="Message"
                name="message"
                onChange={handleInputChange}
                value={values.message}
                maxLength="2000"
                validateOn={onBlurThenChangeAndBlur}
                required
              />
              <Submit as={Button}>Send</Submit>
            </Form>
          </FormWrapper>
        )}
      </ContactWrapper>
    </>
  );
};

export default Contact;
