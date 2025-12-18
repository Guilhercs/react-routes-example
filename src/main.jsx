import "./index.css";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";

// import { Login } from "./pages/Login/index.jsx";
// import { Register } from "./pages/Register/index.jsx";
// import { Feed } from "./pages/Feed/index.jsx";
// import { BlogPost } from "./pages/BlogPost/index.jsx";

// For this form to work, the components need to be exported as default
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Feed = lazy(() => import("./pages/Feed"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            path=""
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="blog-post"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
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
