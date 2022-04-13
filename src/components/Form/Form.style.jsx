import styled from "styled-components";
import { breakpoints } from "../../styles/MediaQueries";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 250px;
  > * {
    font-size: 16px;
    letter-spacing: 2px;
  }
  .contact-title {
    text-transform: uppercase;
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    padding: 10px 0px;
    color: var(--black);
    ${breakpoints.phone} {
      padding: 10px 10px;
      font-size: 32px;
    }
  }
  ${breakpoints.phoneSmall} {
    width: 300px;
  }
  ${breakpoints.phone} {
    width: 500px;
  }
  ${breakpoints.tablet} {
    width: 450px;
  }
  ${breakpoints.desktop} {
    width: 660px;
  }
`;
export const LabelBox = styled.label`
  text-transform: uppercase;
  padding: 4px 10px;
`;
export const InputBox = styled.input`
  outline: none;
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 4px;
`;
export const TextAreaBox = styled.div`
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 8px;
  padding: 10px 10px 4px 10px;
  margin-bottom: 4px;
  textarea {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    height: 50px;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;
export const SendButton = styled.button`
  outline: none;
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 10px;
  margin: 10px auto 0px auto;
  padding: 10px 12px;
  color: var(--black);
  border: 1px solid var(--black);
  background-color: var(--white);
  transition: background-color 2s ease-out;
  &:hover {
    color: var(--black);
    border: 1px solid var(--black);
    background-color: var(--blue);
  }
`;
export const AlertLabel = styled.div`
  font-size: 14px;
  color: var(--red);
  padding: 0px 0px 0px 8px;
`;
