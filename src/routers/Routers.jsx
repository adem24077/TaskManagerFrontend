import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <Route path="/" element={<Task />} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
