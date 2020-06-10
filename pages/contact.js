import styled from 'styled-components';

import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

import { device } from '../components/mediaQueries';

const ContactWrapper = styled.section`
  background-color: var(--eton-blue);
  padding: 26px 20px;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: var(--cultured);
  padding-bottom: 22px;

  @media ${device.laptop} {
    padding: 31px 62px;
    width: 892px;
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

const Contact = () => (
  <>
    <ContactWrapper id="contact-me">
      <FormWrapper>
        <Heading>Contact me</Heading>
        <SubHeading>
          Let’s get in touch. We would love to hear your message!
        </SubHeading>
        <form action="" style={{ paddingLeft: '12px' }}>
          <TextField label="Your Name" name="sender-name"></TextField>
          <TextField label="Email" name="email"></TextField>
          <TextArea label="Message" name="message" />
          <Button>Send</Button>
        </form>
      </FormWrapper>
    </ContactWrapper>
  </>
);

export default Contact;
