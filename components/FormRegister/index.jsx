import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Error from "components/Error";
import { createUser } from "firebase/client";

const FormRegister = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { email, password } = dataLogin;

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Validamos */
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    createUser(email, password, setUser, setError);

    if (user) {
      router.replace("/Home");
    }

    /* Limpiamos campos */
    setDataLogin({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Container>
        <div className="entry-title">
          <h3>Register</h3>
        </div>

        {error ? <Error message={error} /> : null}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
        <br />
        <div className="center">
          <h6>
            You have an account?
            <Link href="/Entry/SignIn">
              <a> Login</a>
            </Link>
          </h6>
        </div>
      </Container>

      <style jsx>{`
        .center {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default FormRegister;
