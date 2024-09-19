import {
  ACCOUNTINGICON,
  BANKICON,
  Button,
  PEOPLEICON,
  REPORTICON,
} from "@src/imports";

const MainDivitions = () => {
  return (
    <div className=" w-full radius-sm marginTop-sm ">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-4">
          <div className="w-[50%] h-[56px] flex-grow-1">
            <Button
              className="border-white bg-white border w-full h-full radius-sm bg-opacity-20 text-white text-[14px] font-thin flex justify-center items-center gap-2"
              disabled={false}
            >
              <img src={BANKICON} alt="banks" />
              بانک ها
            </Button>
          </div>
          <div className="w-[50%] h-[56px] flex-grow-1">
            <Button
              className="border-white bg-white border w-full h-full radius-sm bg-opacity-20 text-white text-[14px] font-thin flex justify-center items-center gap-2"
              disabled={false}
            >
              <img src={PEOPLEICON} alt="banks" />
              اشخاص
            </Button>
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-[50%] h-[56px] flex-grow-1">
            <Button
              className="border-white bg-white border w-full h-full radius-sm bg-opacity-20 text-white text-[14px] font-thin flex justify-center items-center gap-2"
              disabled={false}
            >
              <img src={ACCOUNTINGICON} alt="banks" />
              حسابداری
            </Button>
          </div>
          <div className="w-[50%] h-[56px] flex-grow-1">
            <Button
              className="border-white bg-white border w-full h-full radius-sm bg-opacity-20 text-white text-[14px] font-thin flex justify-center items-center gap-2"
              disabled={false}
            >
              <img src={REPORTICON} alt="banks" />
              گزارش ها
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDivitions;
