import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ likes, comments, variant, type, onClick, label }) => {
  return (
    <>
   
    <Button variant={variant} type={type} onClick={onClick}>
     {label}
    </Button>
    </>
  );
};

export default CustomButton;
