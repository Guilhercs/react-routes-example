import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";
import { Feed } from "./pages/Feed/index.jsx";
import { BlogPost } from "./pages/BlogPost/index.jsx";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" lazy={true} element={<Login />} />
        <Route path="/auth/register" lazy={true} element={<Register />} />
        <Route path="/" lazy={true} element={<Feed />} />
        <Route path="/blog-post" lazy={true} element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
