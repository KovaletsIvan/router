import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Posts,
  Layout,
  Singlepage,
  NotFound,
} from "./components/index";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
