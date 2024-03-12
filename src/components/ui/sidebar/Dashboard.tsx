import { SideBar } from "./Sidebar";
import { TopeMenu } from "./TopMenu";

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative">
        <SideBar />
        <TopeMenu>{children}</TopeMenu>
      </div>
    </>
  );
};
