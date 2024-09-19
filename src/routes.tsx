import {
  Home,
  Navigate,
  Suspense,
  Loading,
  routePaths,
  LoginPage,
  RegisterPage,
  Dashboard,
} from "@imports";
import { ReactElement } from "react";

type PropsType = {
  children: ReactElement;
};

const IsAuthed: React.FC<PropsType> = ({ children }) => {
  // const { isLoggedIn } = useAuth();
  return true ? children : <Navigate to={routePaths.LOGIN} />;
};

const IsGuest: React.FC<PropsType> = ({ children }) => {
  // const { isLoggedIn } = useAuth();
  return !false ? children : <Navigate to={routePaths.MAIN} />;
};

export const routes = [
  // public routes
  {
    path: routePaths.LOGIN_PAGE,
    element: (
      <IsGuest>
        <LoginPage />
      </IsGuest>
    ),
    isPublic: true,
  },
  {
    path: routePaths.REGISTER_PAGE,
    element: (
      <IsGuest>
        <RegisterPage />
      </IsGuest>
    ),
    isPublic: true,
  },
  {
    path: routePaths.HOME,
    element: (
      <Suspense fallback={<Loading color="#9552FF" />}>
        <IsAuthed>
          <Home />
        </IsAuthed>
      </Suspense>
    ),
    isPublic: true,
  },
  {
    path: routePaths.DASHBOARD,
    element: (
      <Suspense fallback={<Loading color="#9552FF" />}>
        <IsAuthed>
          <Dashboard />
        </IsAuthed>
      </Suspense>
    ),
    isPublic: false,
  },
];

export const isPublicRoute = (path: string) => {
  let isPublic = false;
  for (var key in routes) {
    if (routes.hasOwnProperty(key) && routes[key].path === path) {
      isPublic = routes[key].isPublic === true;
      break;
    }
  }
  return isPublic;
};
