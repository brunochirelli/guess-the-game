import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
