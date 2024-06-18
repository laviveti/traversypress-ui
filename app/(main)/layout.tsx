import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-[250px] min-h-screen h-auto">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
