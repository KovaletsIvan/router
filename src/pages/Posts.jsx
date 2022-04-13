import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { capitalize } from "../getaway";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="page posts">
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          style={{ color: "#3F4140 " }}
        >
          <li>{capitalize(post.title)}</li>
        </Link>
      ))}
    </div>
  );
};
export default Posts;
