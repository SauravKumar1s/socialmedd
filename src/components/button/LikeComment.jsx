import React from "react";
import { Button } from "react-bootstrap";

const LikeComment = ({ likes, comments, variant, type, onClick, label }) => {
  return (
    <>
      <Button variant={variant} type={type} onClick={onClick}>
        {label} {likes} Likes
      </Button>
      <Button variant={variant} type={type} onClick={onClick}>
        {comments.length} Comments
      </Button>
    </>
  );
};

export default LikeComment;
