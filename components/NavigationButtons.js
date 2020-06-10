import styled from 'styled-components';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { device } from './mediaQueries';

const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 30px;
`;

const Label = styled.span`
  cursor: pointer;
  font-style: italic;
  font-weight: bold;
  font-size: 23px;
  line-height: 10px;

  @media ${device.tablet} {
    font-size: 41px;
    letter-spacing: 1.68px;
  }
`;

const Icon = styled.span`
  .chevron-icon {
    vertical-align: middle;
    transform: translateY(-4px);
    font-size: 1.5em;

    @media ${device.tablet} {
      transform: translateY(-10px);
      font-size: 3em;
    }
  }
`;

const Link = styled.a`
  text-decoration: inherit;
  color: inherit;
  cursor: auto;

  &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }

  &.animation-bounce {
    animation: bounce 2s infinite;
    animation-timing-function: ease;
    animation-direction: alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateX(0px);
    }
    10% {
      transform: translateX(-12px);
    }
    30% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
/* style: {
          verticalAlign: 'middle',
          transform: 'translateY(-11px)',
          marginRight: '10px',
        }, */
const Next = ({ label, to }) => (
  <Link href={to} className="animation-bounce">
    <Label>{label}</Label>
    <IconContext.Provider
      value={{
        className: 'chevron-icon',
      }}
    >
      <Icon>
        <FiChevronsRight />
      </Icon>
    </IconContext.Provider>
  </Link>
);

const Prev = ({ label, to }) => (
  <Link href={to}>
    <IconContext.Provider
      value={{
        className: 'chevron-icon',
      }}
    >
      <Icon>
        <FiChevronsLeft />
      </Icon>
    </IconContext.Provider>
    <Label>{label}</Label>
  </Link>
);

const NavigationButtons = ({ next, prev, nextUrl, prevUrl }) => (
  <ComponentWrapper>
    {prev ? <Prev label={prev} to={prevUrl} /> : <span></span>}

    {next ? <Next label={next} to={nextUrl} /> : ''}
  </ComponentWrapper>
);

export default NavigationButtons;
