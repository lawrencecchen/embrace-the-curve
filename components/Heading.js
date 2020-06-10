import styled from 'styled-components';
import { device } from '../components/mediaQueries';

const Heading = styled.h1`
  font-size: 50px;
  color: ${(props) => (props.dark ? 'var(--black)' : 'var(--cultured)')};
  letter-spacing: 3.1px;
  line-height: 81px;
  text-align: center;
  max-width: 800px;

  @media ${device.mobileM} {
    font-size: 69px;
  }

  @media ${device.tablet} {
    text-align: left;
    font-size: 80px;
    letter-spacing: 5.22px;
    line-height: 136px;
    padding-left: 69px;
    margin-top: -50px;
  }

  @media ${device.laptop} {
    max-width: 1000px;
    font-size: 116px;
  }

  @media ${device.desktop} {
  }
`;

export default Heading;
