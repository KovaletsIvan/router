import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hook/useAuth";

import { capitalize } from "../getaway";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { singout } = useAuth();
  console.log(useAuth())
  const navigation = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="page posts">
      <button
        className="logout-btn"
        onClick={() => singout(navigation("/", { replace: true }))}
      >
        Log Out
      </button>
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
