import ActiveLink from './ActiveLink';
import logo from '../assets/embrace-the-curve.svg';
import { device } from '../components/mediaQueries';

const Nav = () => (
  <nav>
    <style jsx>{`
      ul {
        margin-right: 28px;
        margin-left: auto;
        width: fit-content;
        text-align: right;
        margin-top: 0;
      }
      ul > li {
        list-style: none;
        padding-top: 20px;
      }

      .nav-link,
      a {
        text-decoration: none;
        font-size: 29px;
        font-weight: bold;
        letter-spacing: 0.9px;
        line-height: 1;
        color: var(--cultured);
      }

      .active {
        text-decoration: underline;
      }

      .brand {
        margin-right: auto;
        color: var(--cultured);
        padding-top: 10px;
        font-size: 29px;
        letter-spacing: 0.9px;
        line-height: 1;
        font-weight: bold;
        position: absolute;
        background-color: var(--cultured);
        left: 0;
      }
      @media ${device.tablet} {
        .brand {
          padding-top: 20px;
          margin-left: 69px;
        }
      }
    `}</style>
    <div className="brand">
      {/* <a href="/">Embrace the Curve</a> */}
      <a href="/">
        <img src={logo} />
      </a>
    </div>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/dealing-with-pain">
          <a className="nav-link">Dealing with Pain</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/time-to-decorate">
          <a className="nav-link">Time to Decorate!</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="#contact-me" activeClassName="">
          <a className="nav-link">Contact</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
