import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: var(--eton-blue);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16px;
`;

const Footer = () => <FooterWrapper>© Embrace the Curve</FooterWrapper>;

export default Footer;
