import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/use-localstorage";
import { CurrentUserContext } from "../../contexts/currentUser";

export const Authentication = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessfillSubmit, setIsSuccessfillSubmit] = useState(false);
  const [{ isLoading, response }, doFetch] = useFetch("/users");
  const [, setToken] = useLocalStorage("token");
  const [, dispatch] = useContext(CurrentUserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    doFetch({
      method: "post",
      data: {
        user: {
          username: username,
          password: password,
        },
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("response", response);
    setToken(response.token);
    setIsSuccessfillSubmit(true);
    dispatch({ type: "SET_AUTHORIZED", payload: response.user });
  }, [response, setToken, dispatch]);

  if (isSuccessfillSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-page flex h-screen w-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className=" inline-flex flex-col justify-center items-center"
      >
        <div className="">
          <input
            type="text"
            className="border rounded p-3 w-64 m-3"
            placeholder="Login"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="password"
            className="border rounded p-3 w-64 m-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          disabled={isLoading}
          className="bg-indigo-500 w-100 p-3 w-64 rounded m-3 text-white font-bold"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};
