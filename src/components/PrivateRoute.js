import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate replace to="/login" />;
};

export default PrivateRoute;
