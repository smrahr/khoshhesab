import { RxHamburgerMenu, Button } from "@imports";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <RxHamburgerMenu color="white" />
      </div>
      <div className="w-[140px] h-[40px] ">
        <Button
          className={` w-full text-xs border rounded-md flex justify-center items-center gap-2 border-white text-white h-full font-thin`}
          disabled={false}
        >
          مشاهده اسناد امروز
        </Button>
      </div>
      <div>
        <RxHamburgerMenu color="white" />
      </div>
    </div>
  );
};

export default Header;
