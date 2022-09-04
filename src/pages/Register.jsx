import axios from "axios";
import { useState } from "react";
import { requestConfig, awsEndpoint } from "../constants";
import { Form, FormGroup, AuthWrapper, ErrMsg } from '../styled'
import { setUserSession } from '../auth';
import { useNavigate } from 'react-router-dom';
import { Submit } from '../components';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  });
  const history = useNavigate();
  const [viewPass1, setViewPass1] = useState(false);
  const [viewPass2, setViewPass2] = useState(false);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, username, password, password2 } = data;
  const onSubmit = async (e) => {
    e.preventDefault();
    // if (msg) setMsg("");
    if (
      name.trim().length === 0 ||
      username.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      setMsg("Please make sure you have filled all the fields.");
      return;
    }
    if (password !== password2) {
      setMsg("Passwords do not match, please confirm your password before proceeding.");
      return;
    }
    const requestBody = {
      name,
      email,
      username,
      password,
      password2
    };

    try {
      setIsLoading(true);
      const res = await axios.post(`${awsEndpoint}/register`, requestBody, requestConfig);
      setUserSession(res.data.user, res.data.token);
      history('/');
    } catch (e) {
      if (e.response.status === 401 || e.response.data.status === 403)
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
        <h2>Sign up for your account</h2>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            placeholder="mail@example.com"
            type="text"
            value={data.name}
            name="name"
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="mail@example.com"
            type="email"
            value={data.email}
            name="email"
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <input
            placeholder="exampleusername"
            type="text"
            value={data.username}
            name="username"
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup isPassBound>
          <label htmlFor="password" onClick={() => setViewPass1(!viewPass1)}>
            Password {viewPass1 ? " (click to hide)" : " (click to view)"}
          </label>
          <input
            type={viewPass1 ? "text" : "password"}
            value={data.password}
            name="password"
            onChange={onChange}
            placeholder="No password rules - they make everything confusing for the user"
          />
        </FormGroup>
        <FormGroup isPassBound>
          <label htmlFor="password2" onClick={() => setViewPass2(!viewPass2)}>
            Confirm password {viewPass2 ? " (click to hide)" : " (click to view)"}
          </label>
          <input
            type={viewPass2 ? "text" : "password"}
            value={data.password2}
            name="password2"
            onChange={onChange}
            placeholder="Simply repeat the password your have already typed in the previous field."
          />
        </FormGroup>
        {msg && (
          <ErrMsg>
            <p>{msg}</p>
            <span onClick={() => setMsg("")}>&times;</span>
          </ErrMsg>
        )}
        <Submit text="Sign up" isLoading={isLoading} />
      </Form>
    </AuthWrapper>
  );
}

export default Register;