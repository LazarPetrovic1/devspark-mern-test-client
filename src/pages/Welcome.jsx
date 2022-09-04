import { getUser } from "../auth";
import { WelcomeWrapper } from "../styled";

function Welcome() {
  const user = getUser();
  return (
    <WelcomeWrapper>
      <h1>Welcome, {user.name}</h1>
      <p>The following is all of your information as is stored in the database, except for the password:</p>
      <div>
        <p>ID: <span>{user?._id}</span></p>
        <p>Date of creation: <span>{user?.dateCreated}</span></p>
        <p>Date of modification: <span>{user?.dateModified}</span></p>
        <p>E-mail: <span>{user?.email}</span></p>
        <p>Name: <span>{user?.name}</span></p>
        <p>Username: <span>{user?.username}</span></p>
      </div>
    </WelcomeWrapper>
  );
}

export default Welcome;