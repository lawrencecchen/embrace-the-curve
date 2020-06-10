import styled from 'styled-components';

import { device } from '../components/mediaQueries';
import Nav from '../components/Nav';
import Heading from '../components/Heading';
import { ContentHeading, ContentParagraph } from '../components/Highlight';
import Contact from './contact';
import Footer from '../components/Footer';
import NavigationButtons from '../components/NavigationButtons';
import shoeBefore from '../assets/shoe-before.png';
import shoeAfter from '../assets/shoe-after.png';

const Highlight = styled.div`
  background-color: var(--cultured);
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 70px;
  padding-top: 35px;

  @media ${device.laptop} {
    margin-top: 125px;
    padding-left: 302px;
    padding-right: 302px;
    padding-top: 70px;
    &:nth-child(1) {
      margin-top: 125px;
    }
  }
`;

const ContentWrapper = styled.div`
  background-color: var(--eton-blue);
`;

const ImageGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 99.225vw;
  position: relative;
  margin-left: -49.59vw;
  left: 50%;
`;

const Image = styled.img`
  max-width: 573px;
  width: 100%;
  margin: 30px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const YoutubeVideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 573px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 22px;

  &::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const DealingWithPain = () => (
  <ContentWrapper>
    <Nav />
    <section>
      <Heading dark>Time to Decorate!</Heading>
    </section>
    <Highlight>
      <ContentHeading>Personalizing my shoes</ContentHeading>
      <ContentParagraph>
        The first time I painted on my orthopedic shoes, I was ecstatic! Even
        though I am not the best artist, I really enjoyed the process. When I
        wore my painted shoes out for the first time, I felt so proud, confident
        and happy. Not only can you paint your shoes, but also your brace! Be
        sure to use a spray or a clear coat as a protective measure to prevent
        wear and tear.
      </ContentParagraph>
      <ImageGallery>
        <Image src={shoeBefore} alt="Birkenstocks before painting" />
        <Image src={shoeAfter} alt="Birkenstocks AFTER painting!" />
      </ImageGallery>
      <YoutubeVideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/6SIuvGc4WHw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </YoutubeVideoWrapper>
      <NavigationButtons
        prev="Dealing with Pain"
        prevUrl="/dealing-with-pain"
      />
    </Highlight>
    <Contact />
    <Footer />
  </ContentWrapper>
);

export default DealingWithPain;
