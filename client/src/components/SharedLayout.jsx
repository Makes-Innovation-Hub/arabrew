import React from "react";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Outlet />
      {/* shared components like navbar or menu comes here, UNDER the Outlet */}
    </>
  );
};

export default SharedLayout;
