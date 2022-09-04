import styled from 'styled-components'
import { colours } from '../../constants';

const ReadmeWrapper = styled.section`
  & > h1 {
    text-align: center;
    font-size: 2.5rem;
  }
  & > p {
    font-size: 1.75rem;
    text-align: center;
  }
  & > article {
    margin: 1rem 0.5rem;
    & > div {
      padding: 0.75rem;
      & > h2 {
        font-size: 2rem;
        text-align: right;
        border-bottom: 3px solid ${colours.README_BORDER_COLOUR};
        margin-bottom: 1rem;
      }
      & > p {
        font-size: 1.5rem;
      }
    }
  }
`;

export default ReadmeWrapper;