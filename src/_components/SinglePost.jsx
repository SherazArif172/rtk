import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.data.data.find((item) => item.id === parseInt(id))
  );

  if (!post) {
    return <h2>Post not found</h2>;
  }
  return (
    <div className="p-6 w-full bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-400">{post.body}</p>
    </div>
  );
};

export default SinglePost;
