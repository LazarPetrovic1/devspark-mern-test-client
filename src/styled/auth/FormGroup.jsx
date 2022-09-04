import styled from 'styled-components'
import { colours } from '../../constants';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 0 1.5rem 0;
  & > label {
    cursor: ${props => props.isPassBound ? "pointer" : "default"};
    font-size: 0.9rem;
    font-weight: bolder;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.5rem;
  }
  & > input {
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem;
    border-bottom: 3px solid ${colours.AUTH_FIELD_PROMPT};
    background-color: ${colours.AUTH_FIELD_BG};
    color: ${colours.AUTH_FIELD_COLOR};
    transition: all 300ms ease;
    &:focus,
    &:hover {
      outline: 0;
      background-color: ${colours.AUTH_FIELD_BG_FOCUS};
    }
    &::placeholder {
      color: ${colours.AUTH_TEXT_PLACEHOLDER_COLOR};
      font-style: italic;
    }
  }
`;

export default FormGroup;