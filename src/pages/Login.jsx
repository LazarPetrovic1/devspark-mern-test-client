import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, AuthWrapper, ErrMsg } from '../styled'
import { useNavigate } from 'react-router-dom';
import { requestConfig, awsEndpoint } from "../constants";
import { setUserSession } from "../auth";
import { Submit } from '../components';

function Login() {
  const [data, setData] = useState({ login: '', password: '' });
  const [viewPass, setViewPass] = useState(false);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const { login, password } = data;
  const onSubmit = async (e) => {
    e.preventDefault();
    // if (msg) setMsg("");
    if (!login || !password) {
      setMsg("Please fill in all of the fields.");
      return;
    }
    const requestBody = {
      login, password
    }

    try {
      setIsLoading(true);
      const res = await axios.post(`${awsEndpoint}/login`, requestBody, requestConfig);
      setUserSession(res.data.user, res.data.token);
      history('/');
    } catch (e) {
      if (e.response.data.status === 401 || e.response.data.status === 403)
        setMsg(e.response.data.message);
      else setMsg("There is an issue with the infrastructure - Internal server error.\nPlease try again later.");
    } finally {
      if (msg) setMsg('');
      if (isLoading) setIsLoading(false);
    }
  }
  const onChange = e => setData({ ...data, [e.target.name] : e.target.value });

  return (
    <AuthWrapper>
      <Form onSubmit={onSubmit}>
        <h2>Log in to your account</h2>
        <FormGroup>
          <label htmlFor="login">Username or E-mail</label>
          <input
            placeholder="mail@example.com or exampleusername"
            type="text"
            value={login}
            name="login"
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup isPassBound>
          <label htmlFor="password" onClick={() => setViewPass(!viewPass)}>
            Password {viewPass ? " (click to hide)" : " (click to view)"}
          </label>
          <input
            type={viewPass ? "text" : "password"}
            value={password}
            name="password"
            onChange={onChange}
            placeholder="No password rules - they make everything confusing for the user"
          />
        </FormGroup>
        {msg && (
          <ErrMsg>
            <p>{msg}</p>
            <span onClick={() => setMsg("")}>&times;</span>
          </ErrMsg>
        )}
        <Submit text="Log in" isLoading={isLoading} />
      </Form>
    </AuthWrapper>
  );
}

export default Login;