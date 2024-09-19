import { AddEvidence, Header } from "@src/imports";
import { ChildProps } from "@src/types/generalTypes";

const Layout: React.FC<ChildProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <div className="h-[100vh] overflow-y-scroll">
          <Header />
          {children}
        </div>
        <div className="h-[64px] w-[100%] absolute bottom-0 left-0 ">
          <AddEvidence />
        </div>
      </div>
    </div>
  );
};
export default Layout;
