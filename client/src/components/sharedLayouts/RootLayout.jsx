import React from "react";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Outlet />
      {/* shared components for the root like navbar or menu comes here, UNDER or above the Outlet */}
    </>
  );
};

export default RootLayout;
