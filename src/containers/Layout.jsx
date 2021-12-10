import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
