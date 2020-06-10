import styled from 'styled-components';
import { device } from './mediaQueries';

export const Highlight = styled.div`
  max-width: 616px;
  background-color: var(--cultured);

  @media ${device.tablet} {
    &:nth-child(1) {
      margin-top: 125px;
    }
  }
`;

export const ContentHeading = styled.h2`
  color: var(--black);
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0px;
  width: min-content;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  margin-top: 0px;
  padding-top: 35px;
  margin-bottom: -12px;
  line-height: 50px;

  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 53px;
  }

  @media ${device.laptop} {
    line-height: 3px;
    margin: 0;
    margin-left: -22px;
  }
`;

export const ContentParagraph = styled.p`
  font-weight: 400;
  font-size: 21px;
  font-size: 18px;
  line-height: 35px;
  letter-spacing: 0.86px;
  text-align: left;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 22px;
  margin-bottom: 0;

  @media ${device.tablet} {
    text-align: left;
    line-height: 55px;
    font-size: 31px;
  }
`;
