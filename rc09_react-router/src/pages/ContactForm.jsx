import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    country: "",
  });

  const handleSubmit = (e) => {
    const { username, password, country } = formValues;
    alert(`Username: ${username}
    Password:${password}
    Country:${country}`);
  };

  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-4 text-center">
      <h1 className="text-danger">CONTACT FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username:
            <span className="text-danger fw-bold">{formValues.username}</span>
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="name"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="pass"
            value={formValues.password}
            onChange={handleFormValues}
          />
        </div>

        <div>
          <label htmlFor="state">
            Country
            <span className="text-danger fw-bold">:{formValues.country}</span>
          </label>
          <select
            id="state"
            className="form-select"
            name="country"
            value={formValues.country}
            onChange={handleFormValues}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <Button type="submit" variant="success" className="mt-4">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
