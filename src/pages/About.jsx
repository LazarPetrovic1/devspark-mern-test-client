import { getToken, getUser } from "../auth";
import { AboutWrapper } from "../styled";

function About() {
  const user = getUser();
  const token = getToken();
  const isAuthenticated = token && Object.keys(user).length > 0;
  return (
    <AboutWrapper>
      <h1>About</h1>
      <p>A simple AWS Mern app, conducted as a test of capabilities.</p>
      <p>Tech used includes the following:</p>
      <ol>
        <li><span>React</span>
          <ul>
            <li>
              <a rel="noreferrer" target="_blank" href="https://www.npmjs.com/package/axios">axios</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://reactjs.org/">React.js</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://reactrouter.com/en/v6.3.0">React Router DOM</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://styled-components.com/">Styled Components</a>
            </li>
          </ul>
        </li>
        <li><span>AWS</span>
          <ul>
            <li>
              <a href="https://docs.aws.amazon.com/iam/index.html" rel="noreferrer" target="_blank">IAM</a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/apigateway/index.html" rel="noreferrer" target="_blank">API Gateway</a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/lambda/index.html" rel="noreferrer" target="_blank">Lambda</a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/cloudwatch/index.html" rel="noreferrer" target="_blank">CloudWatch</a> (for Logs)
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.mongodb.com/atlas/database" rel="noreferrer" target="_blank">MongoDB Atlas Database</a>
        </li>
      </ol>
      <p>
        This is just a brief overview of the technologies used.<br />
        For a more detailed description, please {isAuthenticated ? "check the README page" : "make an account and check the README page"}.<br />
        Alternatively, you can also go to the GitHub repo and check the README.md file there.
      </p>
    </AboutWrapper>
  )
}

export default About;