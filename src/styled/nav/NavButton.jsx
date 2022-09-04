import styled from 'styled-components'
import { colours } from '../../constants';

const NavButton = styled.button`
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 1rem;
  padding: 0 0.5rem;
  height: 100%;
  color: ${colours.NAV_LINK_REG};
  background-color: ${colours.NAV_BG};
  border-radius: 5px;
  transition: all 300ms ease;
  &:focus { outline: none; }
  &:hover {
    background-color: ${colours.NAV_LINK_BG_HOVER};
    color: ${colours.NAV_LINK_HOVER};
  }
`;

export default NavButton;