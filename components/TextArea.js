import styled from 'styled-components';
import { device } from './mediaQueries';

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  min-height: 140px;
  font-size: 15px;
  line-height: 26px;
  padding: 4px 10px;
  position: relative;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
    rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
  background: white none repeat scroll 0% 0%;
  cursor: text;
  flex: 1 1 0%;
  margin-right: 8px;
  transition: box-shadow 500ms ease;
  margin-bottom: 20px;

  &:focus-within {
    box-shadow: rgba(46, 170, 220, 0.7) 0px 0px 0px 1px inset,
      rgba(46, 170, 220, 0.4) 0px 0px 0px 2px !important;
  }

  @media ${device.tablet} {
    max-width: 685px;
  }
`;

const TextBox = styled.textarea`
  font-size: inherit;
  min-height: 140px;
  line-height: inherit;
  border: medium none;
  background: var(--white) none repeat scroll 0% 0%;
  width: 100%;
  display: block;
  resize: none;
  padding: 0px;
  font-family: var(--default-font);

  &:focus {
    outline: 0;
  }
`;

const StyledLabel = styled.label`
  font-size: 18px;
  line-height: 35px;
  color: var(--accent);
  font-weight: 500;
`;

const TextArea = ({ label, name, ...rest }) => (
  <>
    <StyledLabel htmlFor={name} name={name}>
      {label}
    </StyledLabel>
    <TextFieldWrapper>
      <TextBox type="text" name={name} id={name} {...rest} />
    </TextFieldWrapper>
  </>
);

export default TextArea;
