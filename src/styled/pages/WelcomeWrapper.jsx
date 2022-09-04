import styled from 'styled-components'
import { colours } from '../../constants';

const WelcomeWrapper = styled.section`
  height: 100%;
  & > h1 {
    text-align: center;
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  & > p {
    text-align: center;
    font-size: 1.75rem;
  }
  & > div {
    margin: 1.5rem;
    padding: 0.5rem;
    border: 1px solid ${colours.INFORMATION_BORDER_COLOUR};
    & > p {
      font-weight: bolder;
      margin: 1rem 0;
      font-size: 1.5rem;
      & > span {
        color: ${colours.INFORMATION_TEXT};
      }
    }
  }
`;

export default WelcomeWrapper;