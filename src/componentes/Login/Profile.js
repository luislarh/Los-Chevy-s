import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

// import JSONPretty from 'react-json-pretty';
// import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <div>
        <p className="userP">{user.name}</p>
      </div>
    )
  );
};

export default Profile;
