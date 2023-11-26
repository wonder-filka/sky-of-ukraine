import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Login = ({ setIsSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessfillSubmit, setIsSuccessfillSubmit] = useState(false);
  const [, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND_LINK + "/users", {
        user: {
          username: username,
          password: password,
        },
      })
      .then(function (response) {
        setIsSignedIn(true);
        setIsSuccessfillSubmit(true);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  };

  if (isSuccessfillSubmit) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className=" ">
        <div className="">
          <input
            type="text"
            className=""
            placeholder="Login"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="password"
            className=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
