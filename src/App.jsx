import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Posts,
  Singlepage,
  NotFound,
  LoginPage,
} from "./pages/index";

import Layout from "./components/Layout";

import RequireAuth from "./hoc/RequireAuth";
import  AuthProvider  from "./hoc/AuthProvider";

import "./App.css";

function App() {
  return (
   
       <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about/" element={<About />} />
            <Route
              path="posts"
              element={
                <RequireAuth>
                  <Posts />
                </RequireAuth>
              }
            />
            <Route path="posts/:id" element={<Singlepage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
       </AuthProvider> 
    
  );
}

export default App;
