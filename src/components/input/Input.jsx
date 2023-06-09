import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group controlId={props.id} >
    <Form.Label>{props.label}</Form.Label>
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      style={{ width: "300px", margin: "0 auto" }}
    />
  </Form.Group>
  );
};

export default Input;