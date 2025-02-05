import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutProps {
  children: ReactNode; // This allows you to pass content inside the Layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="flex flex-col min-h-screen">
        <Navbar theme={"dark"} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
