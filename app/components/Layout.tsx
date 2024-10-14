import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TrendingSidebar from "./TrendingSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-row overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 justify-between">
        <Header />
        <main className="flex-1  bg-black">{children}</main>
      </div>
      <TrendingSidebar />
    </div>
  );
};

export default Layout;
