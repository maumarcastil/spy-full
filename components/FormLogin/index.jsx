import Head from "next/head";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Error from "components/Error";

const FormLogin = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const { email, password } = dataLogin;

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando info");

    /* Validamos */
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <Container>
        <div className="entry-title">
          <h3>Login</h3>
        </div>

        {error ? <Error message="Este es el mensaje de Error" /> : null}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormLogin;
