import React, { FC, PropsWithChildren } from "react";

type Props = {};

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center relative">
      {children}
    </div>
  );
};

export default AuthLayout;
