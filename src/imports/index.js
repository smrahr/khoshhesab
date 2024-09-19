///////////////////////PACKAGES/////////////////////
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
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
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
export { useForm, Controller } from "react-hook-form";
export { yupResolver } from "@hookform/resolvers/yup";
export * as Yup from "yup";
export { default as moment } from "jalali-moment";
export { default as dayjs } from "dayjs";

///////////////////////ICONS/////////////////////
export {
  FaRegEyeSlash,
  FaRegEye,
  FaCheck,
  FaTrash,
  FaUser,
} from "react-icons/fa";
export { IoIosRefresh } from "react-icons/io";
export { RxHamburgerMenu } from "react-icons/rx";
export { GoPlus } from "react-icons/go";
export { TiPlus } from "react-icons/ti";

///////////////////////PAGES/////////////////////
export { default as Home } from "@pages/Home";
export { default as LoginPage } from "@pages/Auth/LoginPage";
export { default as RegisterPage } from "@pages/Auth/RegisterPage";
export { default as Dashboard } from "@pages/Dashboard";

///////////////////////COMPONENTS/////////////////////
export {
  toPersianDigits,
  numberWithCommas,
  getJustNumber,
  checkMelliCode,
} from "@utils/numberHelpers";
export { default as CommonTextField } from "@common/TextField";
export { default as LoginContent } from "@src/components/loginPage/LoginContent";
export { default as LoginForm } from "@src/components/loginPage/LoginForm";
export { default as CodeForm } from "@src/components/loginPage/CodeForm";
export { default as Button } from "@src/common/Button";
export { default as Loading } from "@common/Loading";
export { default as Layout } from "@layout/Layout";
export { default as RegisterForm } from "@src/components/register/RegisterForm";
export { default as Header } from "@layout/Header";
export { default as Footer } from "@layout/Footer";

///////////////////////CONSTANTS/////////////////////
export { daysOfWeek } from "@src/constants/general";
