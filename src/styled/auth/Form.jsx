import styled from 'styled-components'
import { colours } from '../../constants';

const Form = styled.form`
  border: ${colours.AUTH_BORDER};
  padding: 1rem;
  & > h2 {
    text-align: center;
    font-size: 2.5rem;
  }
`;

export default Form;