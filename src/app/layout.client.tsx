"use client"
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";
interface LayoutClinetType {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClinetType> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
