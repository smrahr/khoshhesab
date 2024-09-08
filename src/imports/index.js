// /////////////////////PAGE/////////////////////
export { default as Home } from "@pages/Home";
export { default as LoginPage } from "@pages/Auth/LoginPage";
export { default as Loading } from "@common/Loading";
export { default as Layout } from "@layout/Layout";

// /////////////////////PACKAGE/////////////////////
export {
  Link,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export {
  default as React,
  useContext,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
  createContext,
  Fragment,
  Suspense,
  useRef,
  useState,
  useMemo,
  lazy,
} from "react";

export { ThreeDots } from "react-loader-spinner";

export * as routePaths from "@constants/routePaths";
