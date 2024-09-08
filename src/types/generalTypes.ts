import { ReactNode } from "react";

export type ChildProps = {
  children: ReactNode;
};

export type UserDataType = {
  name: string;
};

export type LoginHandlerInputsType = { password: string; userName: string };

export type AuthContextType = {
  loginLoading: boolean;
  isLoggedIn: boolean;
  userData: null | UserDataType;
  userLogin: (userData: LoginHandlerInputsType) => void;
  logout: () => void;
};
