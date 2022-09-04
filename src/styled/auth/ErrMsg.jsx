import styled from 'styled-components'
import { colours } from '../../constants';

const ErrMsg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colours.ERR_MSG_TEXT};
  background-color: ${colours.ERR_MSG_BG};
  padding: 0.5rem 0.5rem 0.75rem 0.5rem;
  & > span {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export default ErrMsg;