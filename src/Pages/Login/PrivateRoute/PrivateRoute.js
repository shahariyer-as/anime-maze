import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    return (
      <div style={style}><BallTriangle color="#00BFFF" height={440} width={220} /></div>

    );
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
