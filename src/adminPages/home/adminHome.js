import React from "react";
import CardGrid from "./CardGrid";
import LayoutAdmin from "../../common/LayoutAdmin";

const AdminHome = () => {
  return (
    <LayoutAdmin>
      <div className="flex mx-auto">
        <CardGrid />
      </div>
    </LayoutAdmin>
  );
};

export default AdminHome;
