import styled from 'styled-components'
import { colours } from '../../constants';

const SubmitWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  & > button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${colours.AUTH_CTA_BG};
    color: ${colours.AUTH_CTA_TEXT};
    padding: 0.25rem 0.5rem;
    font-size: 1.15rem;
    transition: all 300ms ease;
    &:hover {
      background-color: ${colours.AUTH_CTA_BG_HOVER};
    }
  }
`;

export default SubmitWrapper;