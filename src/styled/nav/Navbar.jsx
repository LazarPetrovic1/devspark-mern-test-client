import styled from 'styled-components';
import { colours } from '../../constants';

const Navbar = styled.nav`
  padding: 0.5rem;
  background-color: ${colours.NAV_BG};
  display: flex;
  justify-content: space-between;
`;

export default Navbar;