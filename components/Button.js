import styled from 'styled-components';

const Button = styled.button`
  width: 146px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--dark-green);
  color: var(--cultured);
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 0px;
  cursor: pointer;
  border: none;
  font-family: var(--default-font);
  transition: all 250ms ease;

  &:hover,
  &:active {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.0625),
      0 4px 8px 0 rgba(0, 0, 0, 0.125);
  }

  &:visited {
    box-shadow: rgba(46, 170, 220, 0.7) 0px 0px 0px 1px inset,
      rgba(46, 170, 220, 0.4) 0px 0px 0px 2px !important;
  }
`;

export default Button;
