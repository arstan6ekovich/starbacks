import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface LayoutType {
  children: ReactNode;
}

const layout: FC<LayoutType> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
