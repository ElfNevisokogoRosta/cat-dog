import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AdminLayout from "./components/Layouts/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CategoryPage from "./pages/Admin/CategoryPage";
import SubcategoryPage from "./pages/Admin/SubcategoryPage";
import UsersPage from "./pages/Admin/UsersPage";

function App() {
  return (
    <div className={"w-full h-full relative"}>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AdminDashboard/>} />
          <Route path={'category'} element={<CategoryPage/>}/>
          <Route path={'subcategory'} element={<SubcategoryPage/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
        </Route>
        <Route path="/"></Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
