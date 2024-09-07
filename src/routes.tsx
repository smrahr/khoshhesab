import * as routePaths from "@constants/routePaths";
import { Home, Navigate, LoginPage, Suspense, Loading } from "@imports";
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
  return !true ? children : <Navigate to={routePaths.MAIN} />;
};

export const routes = [
  // public routes

  {
    path: routePaths.HOME,
    element: (
      <IsGuest>
        <LoginPage />
      </IsGuest>
    ),
    isPublic: true,
  },
  {
    path: routePaths.LOGIN_PAGE,
    element: (
      <Suspense fallback={<Loading color="#9552FF" />}>
        <IsAuthed>
          <Home />
        </IsAuthed>

      </Suspense>

    ),
    isPublic: true,
  },
];
