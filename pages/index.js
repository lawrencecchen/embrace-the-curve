import Head from 'next/head';

import Nav from '../components/Nav';
import styled from 'styled-components';
import Contact from './contact';
import Footer from '../components/Footer';
import { device } from '../components/mediaQueries';
import Heading from '../components/Heading';
import {
  Highlight,
  ContentHeading,
  ContentParagraph,
} from '../components/Highlight';
import NavigationButtons from '../components/NavigationButtons';

import favicon from '../assets/favicon.ico';

const ContentWrapper = styled.div`
  background: transparent linear-gradient(41deg, #629027 0%, #0c4e3c 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
`;

const SubHeading = styled.h1`
  font-weight: Bold;
  font-size: 30px;
  color: var(--cultured);
  letter-spacing: 0px;
  line-height: 55px;
  margin: 0;
  padding: 0;

  .larger {
    font-size: 81px;
    margin-right: 10px;
    letter-spacing: 0px;
  }

  @media ${device.laptop} {
    width: 860px;
  }
`;

const IntroBlurb = styled.section`
  background-color: var(--red);
  color: var(--cultured);
  padding-left: 29px;
  padding-right: 12px;
  padding-top: 40px;
  padding-bottom: 18px;
  margin-top: 100px;

  @media ${device.tablet} {
    width: 581px;
    position: relative;
    left: 138px;
  }
`;

const Paragraph = styled.p`
  font: Regular 19px var(--default-font);
  size: 19px;
  line-height: 27px;

  @media ${device.tablet} {
    text-align: left;
    font-weight: 300;
    font-size: 21px;
    letter-spacing: 0px;
  }
`;

const BorderedWrapper = styled.section`
  border: 16px solid var(--eton-blue);
  background-color: var(--cultured);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 18px;

  @media ${device.tablet} {
    margin-top: -120px;
  }
`;

const IndexPage = () => (
  <>
    <Head>
      <meta
        name="description"
        content="ETC is a nonprofit organization that strives to provide  fun ideas on how to decorate modified shoes, braces, and other scoliosis equipment in order to promote body positivity and happiness. Also, ETC is working on creating a shoe band that can be adhered to the outer sole of the modified shoe in order to beautify the design of the orthopedic shoe. ETC is also working on a low cost solution to a shoe lift, without the need for costly shoe modification by a cobbler."
      />

      <title>Embrace the Curve</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
    </Head>
    <ContentWrapper>
      <Nav />
      <section>
        <Heading>Embrace the Curve</Heading>
      </section>
      <IntroBlurb>
        <SubHeading>
          <span className="larger">Hi!</span>{' '}
          <span>
            My name is Angela Huang, and I am the founder of Embrace the Curve,
            Inc! I am currently a high schooler and a scoliosis patient myself.
          </span>
        </SubHeading>
        <Paragraph>
          I was diagnosed with scoliosis in middle school. At the beginning, my
          curve was moderate, but it has increased in degrees since. Ever since
          I was diagnosed with scoliosis, I needed to wear an orthopedic shoe
          lift to address my leg length discrepancy. Being a teen, it was very
          embarrassing to wear a heavily modified shoe on one foot with a very
          noticeable difference in height than the other. As some of you may
          relate, I had a pretty difficult time dealing with that reality along
          with the serious back pain caused by my condition. However, I have
          learned to embrace my physical difference/appearance and gained the
          inner strength to cope with pain/challenges. Now, I have a healthier
          attitude and more positive view. Even though I still face daily
          challenges, I want to share my experiences with those who may be
          facing similar difficulties and may find some encouragement and
          support in this journey.
        </Paragraph>
      </IntroBlurb>
      <BorderedWrapper>
        <Highlight>
          <ContentHeading>Mission</ContentHeading>
          <ContentParagraph>
            The mission of ETC is to increase and spread awareness about
            scoliosis among teens and to encourage positive self-image. ETC
            strives to promote a positive outlook on different body shapes and
            the acceptance of a curved spine.
          </ContentParagraph>
        </Highlight>
        <Highlight>
          <ContentHeading>Our Vision</ContentHeading>
          <ContentParagraph>
            ETC will provide methods of coping with the negative effects of
            scoliosis and provide teens with ways to improve the decorative and
            functional aspects of orthopedic shoes to be more affordable.
          </ContentParagraph>
        </Highlight>
        <NavigationButtons
          next="Dealing with Pain"
          nextUrl="/dealing-with-pain"
        />
      </BorderedWrapper>
      <Contact />
      <Footer />
    </ContentWrapper>
  </>
);

export default IndexPage;
