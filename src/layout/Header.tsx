import { RxHamburgerMenu, Button, dayjs, moment, daysOfWeek } from "@imports";

const Header = () => {
  const nowDate = moment(new Date()).locale("fa").format("YYYY/MM/DD");
  const nowDay = daysOfWeek[dayjs().day()];

  return (
    <div className="p-5 flex justify-between text-xs font-thin text-white ">
      <div>
        <RxHamburgerMenu color="white" size={40} />
      </div>
      <div className="w-[140px] h-[40px] ">
        <Button
          className={` w-full text-xs border rounded-md flex justify-center items-center gap-2 border-white text-white h-full `}
          disabled={false}
        >
          مشاهده اسناد امروز
        </Button>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p>{nowDate}</p>
        <p>{nowDay}</p>
      </div>
    </div>
  );
};

export default Header;
