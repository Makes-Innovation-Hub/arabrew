import React from "react";
import { Outlet } from "react-router-dom";
const RegisterLayout = () => {
  return (
    <>
      <Outlet />
      {/* shared components for the Register like navbar or menu comes here, UNDER or above the Outlet */}
    </>
  );
};

export default RegisterLayout;
