import React from "react";
import Header from "@/components/Header/Header";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function TabScreenWrapper({ title, children }: Props) {
  return (
    <>
      <Header title={title} />
      {children}
    </>
  );
}
