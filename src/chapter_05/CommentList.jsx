import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "구기성",
    comment: "안녕하세요, 구기성입니다.",
  },
  {
    name: "우영미",
    comment: "안녕하세요, 우영미입니다.",
  },
  {
    name: "애몽이",
    comment: "안녕하세요, 애몽이입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
