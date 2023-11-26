import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function callUserPoint(event) {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_LINK + "/api/users", formData)
      .then((response) => {
        console.log("User added successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  console.log(formData);
  return (
    <div className="Form">
      <form onSubmit={callUserPoint}>
        <input name="name" onChange={handleChange}></input>
        <input name="email" onChange={handleChange}></input>
        <input name="password" onChange={handleChange}></input>
        <button name="submit" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
