import { getToken, getUser, resetUserSession } from '../auth';
import { Navbar, NavLink, NavList, NavListItem, NavButton } from '../styled';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const user = getUser();
  const token = getToken();
  const isAuthenticated = token && Object.keys(user).length > 0;
  const history = useNavigate();
  const logOut = () => {
    resetUserSession();
    history('/login');
  };

  const authenticatedLinks = (
    <>
      <NavListItem>
        <NavLink to="/">Welcome</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/readme">Readme</NavLink>
      </NavListItem>
      <NavListItem>
        <NavButton onClick={logOut}>Logout</NavButton>
      </NavListItem>
    </>
  );

  const guestLinks = (
    <>
      <NavListItem>
        <NavLink to="/login">Login</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/register">Register</NavLink>
      </NavListItem>
    </>
  )

  return (
    <Navbar>
      <NavLink isLogoPrompt to="/">The App</NavLink>
      <NavList>
        <NavListItem>
          <NavLink to="/about">About</NavLink>
        </NavListItem>
        {isAuthenticated ? authenticatedLinks : guestLinks}
      </NavList>
    </Navbar>
  );
}

export default Nav;