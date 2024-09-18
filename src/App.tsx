import { Layout } from "@imports";
import "./App.css";
import { isPublicRoute, routes } from "@src/routes";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  const renderRoutes = () => {
    if (isPublicRoute(pathname)) {
      return (
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      );
    } else {
      return (
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </Layout>
      );
    }
  };

  return <div>{renderRoutes()}</div>;
}

export default App;
