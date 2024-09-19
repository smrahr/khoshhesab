const BalanceCard = () => {
  return (
    <div className="bg-white w-full p-5 radius-sm flex justify-start items-start flex-col">
      <h3 className="text-xs font-thin flex justify-start">موجودی حساب:</h3>
      <div className="w-full flex justify-between marginTop-sm gap-4">
        <div className="w-[50%] ">
          <select
            className="border-primary-700 w-full"
            style={{ background: "#FFF6E5", border: "none" }}
          >
            <option value="individual">حقیقی</option>
            <option value="company">حقوقی</option>
          </select>
        </div>

        <div className=" w-[40%] text-xs">
          <div className="flex gap-2">
            <p className="text-[14px]">1،242،580،000</p>
            <p style={{ fontSize: "10px" }}>ریال</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xs " style={{ color: "#21BF71" }}>
              +25%
            </p>
            <p style={{ fontSize: "8px" }}>از شروع هر ماه</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
