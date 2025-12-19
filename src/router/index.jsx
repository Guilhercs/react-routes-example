import { lazy } from "react";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Feed = lazy(() => import("../pages/Feed"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const Logout = lazy(() => import("../pages/Logout"));

export function AppRouter() {
  return (
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
            path="blog-post/:slug"
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
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
