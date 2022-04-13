import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="page">
      Page Not Found
      <Link to="/" className="notfound">
        home
      </Link>
    </div>
  );
};

export default NotFound;
