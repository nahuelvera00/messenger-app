import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error SERVER COMPONENT
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
