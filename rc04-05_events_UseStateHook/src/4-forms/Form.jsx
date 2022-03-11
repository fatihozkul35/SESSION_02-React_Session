import React, { useState } from "react";

const Form = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    //  e.preventDefault();
    alert(`Username: ${username}
    Password:${password}
    Country:${country}`);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="text-danger">FORMS (EVENTS)</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger fw-bold">{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUserName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div>
          <label htmlFor="country">
            Country <span className="text-danger fw-bold">:{country}</span>
          </label>
          <select
            id="country"
            className="form-select"
            name="country"
            value={country}
            onChange={handleCountry}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
