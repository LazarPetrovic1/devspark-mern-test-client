import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colours } from '../../constants';

const NavLink = styled(Link)`
  color: ${colours.NAV_LINK_REG};
  user-select: none;
  height: 100%;
  display: grid;
  place-items: center;
  text-decoration: none;
  font-size: ${props => props.isLogoPrompt ? 2 : 1}rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  transition: all 300ms ease;
  &:visited {
    color: ${colours.NAV_LINK_VISITED};
  }
  &:hover {
    ${props => props.isLogoPrompt ? (
      `box-shadow: ${colours.LOGO_PROMPT_SHADOW};`
    ) : (
      `
        background-color: ${colours.NAV_LINK_BG_HOVER};
        color: ${colours.NAV_LINK_HOVER};
      `
    )}
  }
`;

export default NavLink;