import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import FrontLayout from "./components/layout/front";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MyBlogsPage from "./pages/MyBlogsPage";
import AccountPage from "./pages/AccountPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:blogId" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />

          {/* {isAuthenticated ? (
            <Route path="my-blogs" element={<MyBlogsPage />} />
          ) : null}
          {isAuthenticated ? (
            <Route path="account" element={<AccountPage />} />
          ) : null} */}

          <Route
            path="my-blogs"
            element={
              isAuthenticated ? <MyBlogsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="account"
            element={
              isAuthenticated ? <AccountPage /> : <Navigate to="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
