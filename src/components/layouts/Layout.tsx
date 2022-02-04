import { Headers, Footer } from ".";
import React from "react";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Headers h1Title="오픈 마켓 웹사이트" />
      {children}
      <Footer />
    </>
  );
};
