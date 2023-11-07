import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="text-center mt-5">
        {" "}
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;

/**
 * ------------------
 * STEPS
 * ------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, than allow them to visit the route
 * 3. Else redirect the user to the login page.
 * 4. setup the private route
 * 5. handle loading
 *
 * */
