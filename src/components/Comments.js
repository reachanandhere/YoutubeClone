import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Anand Verma",
    text: "This is the comment by Anand verma",
    replies: [],
  },
  {
    name: "Anand Verma",
    text: "This is the comment by Anand verma",
    replies: [],
  },
  {
    name: "Anand Verma",
    text: "This is the comment by Anand verma",
    replies: [],
  },
  {
    name: "Anand Verma",
    text: "This is the comment by Anand verma",
    replies: [
      {
        name: "Anand Verma",
        text: "This is the comment by Anand verma",
        replies: [
          {
            name: "Anand Verma",
            text: "This is the comment by Anand verma",
            replies: [
              {
                name: "Anand Verma",
                text: "This is the comment by Anand verma",
                replies: [
                  {
                    name: "Anand Verma",
                    text: "This is the comment by Anand verma",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </>
    );
  });
};

const Comments = () => {
  return (
    <div className="my-5 w-9/12 sm:w-full shadow-xl">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comments;
