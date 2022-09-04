# Readme

This is the section where I describe what libraries and technologies I used and what I was trying to do.

+ Front-end
  - Due to the task's requirements, I used React.js as the primary view/frontend library.
  - To have full control over styles on the given component level, rather than the application level, styled-components was chosen as the library for styling the app.
  - Because it makes HTTP requests more intuitive and easier to understand, axios was chosen as the promise based HTTP client, instead of the usual fetch.
  - I decided to use React Router DOM as the standard routing library, because of course I did - it's the most popular one, after all.
+ Amazon Web Services
  - In order to securely and quickly deliver content, CloudFront was chosen as the CDN.
  - The authentication and services are executed via a lambda function and that's where that chunk of code is situated.
  - To get an insight into potential problems in the future, CloudWatch is used to monitor the execution of the lambda function and spit out errors/successes. 
  - That same lambda function is bound to the API Gateway with 3 different routes (all POST requests): one for registering the user, one for logging the user in and one for verifying the token, which is used to retain the user online and is deleted once the user log out or after a certain period of time.
  - In order for all of this to work, a separate role was created for the app, using the IAM service.
+ Database
  - In order to store, retrieve and read the information, MongoDB Atlas was chosen as the database over localhost Mongo for one reason: Atlas is in the cloud.
