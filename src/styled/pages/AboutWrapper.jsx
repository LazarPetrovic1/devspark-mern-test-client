import styled from 'styled-components'
import { colours } from '../../constants';

const AboutWrapper = styled.section`
  & > h1 {
    text-align: center;
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  & > p {
    text-align: center;
    font-size: 1.75rem;
  }
  & > ol {
    list-style-position: outside;
    margin: 1.5rem;
    padding: 0.5rem;
    & > li {
      & > span {
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 1.2rem;
      }
    }
    & ul {
      list-style-position: inside;
    }
  }
  & a {
    text-decoration: none;
    color: ${colours.ABOUT_LI_TEXT};
    &:hover {
      color: ${colours.ABOUT_LI_TEXT_HOVER};
    }
  }
`;

export default AboutWrapper;