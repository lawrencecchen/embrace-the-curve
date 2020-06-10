import styled from 'styled-components';

import { device } from '../components/mediaQueries';
import Nav from '../components/Nav';
import Heading from '../components/Heading';
import { ContentHeading, ContentParagraph } from '../components/Highlight';
import Contact from './contact';
import Footer from '../components/Footer';
import NavigationButtons from '../components/NavigationButtons';

const Highlight = styled.div`
  background-color: var(--cultured);
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 35px;
  padding-bottom: 35px;

  @media ${device.laptop} {
    margin-top: 125px;
    padding: 70px 302px;
  }
`;
const ContentWrapper = styled.div`
  background-color: var(--black);
`;

const BorderedWrapper = styled.section`
  border: 16px solid var(--red);
  background-color: var(--cultured);
  padding: 18px 18px;
  font-size: 22px;
  letter-spacing: 0.9px;
  font-weight: 400;

  @media ${device.laptop} {
    max-width: 1034px;
    max-height: 1034px;
    text-align: left;
    font-size: 45px;
    letter-spacing: 2.67px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const DealingWithPain = () => (
  <ContentWrapper>
    <Nav />
    <section>
      <Heading>Dealing with Pain</Heading>
    </section>
    <BorderedWrapper>
      Coping with pain is not an easy task. The best ways that I have found are
      to participate in relaxing activities. Take a walk or read an inspiring
      book to take your mind off of pain. Reach out to others to share and talk
      to other teens about pain and the struggles of scoliosis. Always remember
      that pain is just temporary and we learn to deal with it in incremental
      chunks at a time.
    </BorderedWrapper>
    <Highlight>
      <ContentHeading>Exercise Tips</ContentHeading>
      <ContentParagraph>
        Exercising, in my experience, is one of the best ways to relieve pain.
        Exercising doesn’t always mean an intense workout, however. I have found
        that the most beneficial way to loosen my muscles is through stretching
        and elongating my spine. Work diligently on exercises, and you will see
        and feel results. One specific form of exercise that I have participated
        in is the Schroth Method. Through the Schroth method, I am able to shift
        my spine and train my muscles to fall into the correct position. By
        continuously learning Schroth exercises, I am able to slowly rebuild my
        muscular symmetry and posture. I admit, doing exercises is very
        tenacious and tough to maintain, but the work will pay off.
      </ContentParagraph>
      <NavigationButtons
        prev="Home"
        prevUrl="/"
        next="Time to Decorate!"
        nextUrl="/time-to-decorate"
      />
    </Highlight>
    <Contact />
    <Footer />
  </ContentWrapper>
);

export default DealingWithPain;
