import { ReadmeWrapper } from "../styled";

function Readme() {
  return (
    <ReadmeWrapper>
      <h1>Readme</h1>
      <p>This is the section where I describe what libraries and technologies I used and what I was trying to do.</p>
      <article>
        <div>
          <h2>Front-end</h2>
          <p>
            Due to the task's requirements, I used React.js as the primary view/frontend library.<br />
            To have full control over styles on the given component level, rather than the application level, styled-components was chosen as the library for styling the app.<br />
            Because it makes HTTP requests more intuitive and easier to understand, axios was chosen as the promise based HTTP client, instead of the usual fetch.<br />
            I decided to use React Router DOM as the standard routing library, because of course I did - it's the most popular one, after all.
          </p>
        </div>
        <div>
          <h2>Amazon Web Services</h2>
          <p>
            In order to securely and quickly deliver content, CloudFront was chosen as the CDN.<br />
            The authentication and services are executed via a lambda function and that's where that chunk of code is situated.<br />
            To get an insight into potential problems in the future, CloudWatch is used to monitor the execution of the lambda function and spit out errors/successes.<br /> 
            That same lambda function is bound to the API Gateway with 3 different routes (all POST requests): one for registering the user, one for logging the user in and one for verifying the token, which is used to retain the user online and is deleted once the user log out or after a certain period of time.<br />
            In order for all of this to work, a separate role was created for the app, using the IAM service.
          </p>
        </div>
        <div>
          <h2>Database</h2>
          <p>
            In order to store, retrieve and read the information, MongoDB Atlas was chosen as the database over localhost Mongo for one reason: Atlas is in the cloud.
          </p>
        </div>
      </article>
      <h1>Devlog</h1>
      <p>What I've done during these days.</p>
      <article>
        <div>
          <h2>Tuesday, 30/08/2022</h2>
          <p>
            I received the e-mail and read through the instructions.<br />
            At that point, I saw that I wasn't as familiar with the AWS technologies as I would like to admit, so I decided to skim through the documentation and saw a couple of tutorials, in order to get a better feel for the stack I will be working in.
          </p>
        </div>
        <div>
          <h2>Wednesday, 31/08/2022</h2>
          <p>I asked Milica for a little bit more time, just in case, as I'm learning the new tech and wouldn't like to be stranded in the beginning.</p>
        </div>
        <div>
          <h2>Thursday, 01/09/2022</h2>
          <p>Following some of those tutorials I have watched, I created a sample app, which I decided to systematically analyse during this and the following day, so I would gain a better understanding of the overall structure and how the services used fit into one another.</p>
        </div>
        <div>
          <h2>Saturday, 03/09/2022</h2>
          <p>Created the front-end in React</p>
        </div>
        <div>
          <h2>Sunday, 04/09/2022</h2>
          <p>
            Created the AWS serverless backend for the app.<br />
            Hooked React to the AWS backend, effectively making the app serverless.
          </p>
        </div>
      </article>
    </ReadmeWrapper>
  )
}

export default Readme;