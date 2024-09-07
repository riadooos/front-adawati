import React from "react";
import { HeaderEcole } from "./HeaderEcole";
import FooterEcole from "./FooterEcole";
import SideBar from "./SideBar";

const LayoutEcole = ({ children }) => {
  return (
    <>
      <HeaderEcole />
      <div className="flex gap-4">
        <SideBar />
        <main className="w-full mx-2">{children}</main>
      </div>
      <FooterEcole />
    </>
  );
};

export default LayoutEcole;
