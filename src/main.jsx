import "./index.css";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";

// import { Login } from "./pages/Login/index.jsx";
// import { Register } from "./pages/Register/index.jsx";
// import { Feed } from "./pages/Feed/index.jsx";
// import { BlogPost } from "./pages/BlogPost/index.jsx";

// For this form to work, the components need to be exported as default
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Login"));
const Feed = lazy(() => import("./pages/Login"));
const BlogPost = lazy(() => import("./pages/Login"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Feed />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/auth/login" element={<Login />} />
//         <Route path="/auth/register" element={<Register />} />
//         <Route path="/" element={<Feed />} />
//         <Route path="/blog-post" element={<BlogPost />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
