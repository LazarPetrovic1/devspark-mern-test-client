import axios from 'axios'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUser, getToken, setUserSession, resetUserSession } from './auth';
import { Layout, Nav, PrivateRoutes, Spinner } from "./components";
import { requestConfig, awsEndpoint } from "./constants";
import { Login, Register, Welcome, About, Readme } from './pages';
import { LayoutStyles } from "./styled";

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (
      token === 'undefined' ||
      token === undefined ||
      token === null ||
      !token
    ) return;
    
    const requestBody = {
      user: getUser(),
      token
    };
    
    (async function() {
      try {
        const res = await axios.post(`${awsEndpoint}/verify`, requestBody, requestConfig);
        setUserSession(res.data.user, res.data.token);
        setIsAuthenticating(false);
      } catch (e) {
        resetUserSession();
        setIsAuthenticating(false);
      }
    }())
  }, []);

  const token = getToken()
  if (isAuthenticating && token)
    return <LayoutStyles><Spinner /></LayoutStyles>

  return (
    <LayoutStyles>
      <Router>
        <Nav />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Layout><Welcome /></Layout>} />
            <Route exact path="/readme" element={<Layout><Readme /></Layout>} />
          </Route>
          <Route exact path="/login" element={<Layout><Login /></Layout>} />
          <Route exact path="/about" element={<Layout><About /></Layout>} />
          <Route exact path="/register" element={<Layout><Register /></Layout>} />
        </Routes>
      </Router>
    </LayoutStyles>
  );
}

export default App;
