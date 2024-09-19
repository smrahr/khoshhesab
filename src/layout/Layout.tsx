import { Header } from "@src/imports";
import { ChildProps } from "@src/types/generalTypes";
import Footer from "./Footer";

const Layout: React.FC<ChildProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[500px] relative h-[100vh] overflow-scroll">
        <Header />
        {children}
        <div className="">
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
          <p>kk</p>
        </div>

        <div className="h-[64px] w-full absolute bottom-0 left-0 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Layout;
