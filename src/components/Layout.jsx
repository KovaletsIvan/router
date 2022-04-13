import React from "react";
import { Outlet } from "react-router-dom";

import CustomLink from "./CustomLink";

export const Layout = () => {
  return (
    <>
      <div className="header">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
      </div>
      <Outlet />
      <footer className="footer">Footer</footer>
    </>
  );
};

export default Layout;
