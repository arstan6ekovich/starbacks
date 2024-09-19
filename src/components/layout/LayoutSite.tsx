import { ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutPage {
  children: ReactNode;
}

const LayoutSite: React.FC<LayoutPage> = ({ children }) => {
  return (
    <div className={scss.layoutsite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
