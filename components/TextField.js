import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  font-size: 15px;
  line-height: 26px;
  padding: 4px 10px;
  position: relative;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
    rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
  background: white none repeat scroll 0% 0%;
  cursor: text;
  height: 36px;
  flex: 1 1 0%;
  margin-right: 8px;
  transition: box-shadow 0.5s ease-in-out;
  margin-bottom: 20px;

  &:focus-within {
    box-shadow: rgba(46, 170, 220, 0.7) 0px 0px 0px 1px inset,
      rgba(46, 170, 220, 0.4) 0px 0px 0px 2px !important;
  }
`;

const TextBox = styled.input`
  font-size: inherit;
  line-height: inherit;
  border: medium none;
  background: var(--white) none repeat scroll 0% 0%;
  width: 100%;
  height: 100%;
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

const TextField = ({ label, name, ...rest }) => (
  <>
    <StyledLabel htmlFor={name} name={name}>
      {label}
    </StyledLabel>
    <TextFieldWrapper>
      <TextBox type="text" name={name} id={name} {...rest} />
    </TextFieldWrapper>
  </>
);

export default TextField;
