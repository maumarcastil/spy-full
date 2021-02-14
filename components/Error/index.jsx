import Head from "next/head";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Error = ({ message }) => {
  if (message === true) {
    message = "Todos los campos son requeridos";
  }
  return (
    <>
      <Alert variant="danger">{message}</Alert>
    </>
  );
};

export default Error;
