import { Button, useState } from "@src/imports";

type ExchangeBtnType = {
  id: number;
  title: string;
};

const exchangesBtn = [
  { id: 1, title: "همه" },
  { id: 2, title: "پرداختی ها" },
  { id: 3, title: "دریافتی ها" },
  { id: 4, title: "چک پرداختی ها" },
  { id: 5, title: "چک دریافتی ها" },
];

const Exchanges = () => {
  const [exchangeActiveBtn, setExchangeActiveBtn] = useState({
    id: 1,
    title: "همه",
  });

  const handleClickExchange = (btn: ExchangeBtnType) => {
    setExchangeActiveBtn(btn);
  };
  return (
    <div className="bg-white w-full p-5 radius-sm marginTop-sm">
      <div className="flex justify-between">
        <p className="text-xs flex items-center font-thin">
          دریافتی ها و پرداختی ها
        </p>
        <div className="text-xs flex items-center font-thin shadow-none">
          <select
            className=" w-full flex items-center"
            style={{ background: "white", border: "none", boxShadow: "none" }}
          >
            <option value="individual">جدیدترین</option>
          </select>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden hide-scroll">
        <div className="w-full h-full text-xs font-thin flex gap-2 marginTop-sm overflow-scroll ">
          {exchangesBtn.map((btn) => (
            <Button
              key={btn.id}
              className={`h-full flex justify-center items-center  p-3 radius-sm whitespace-nowrap  ${
                exchangeActiveBtn.id === btn.id
                  ? "bg-primary-900 text-white"
                  : "text-black bg-[#E9E9E9]"
              }`}
              style={{}}
              disabled={false}
              onClick={() => handleClickExchange(btn)}
            >
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="marginTop-md flex flex-col gap-2">
        <div className="bg-[#CEF7E3] w-full px-2 py-4 radius-sm flex text-[10px] justify-between font-thin">
          <div className="flex gap-2">
            <div>چک دریافتی</div>
            <div>(ساعت 18:45)</div>
          </div>
          <div>21،525،000 ریال </div>
        </div>
        <div className="bg-[#FFD4D4] w-full px-2 py-4 radius-sm flex text-[10px] justify-between font-thin">
          <div className="flex gap-2">
            <div>چک پرداختی</div>
            <div>(ساعت 18:45)</div>
          </div>
          <div>21،525،000 ریال </div>
        </div>
        <div className="bg-[#CEF7E3] w-full px-2 py-4 radius-sm flex text-[10px] justify-between font-thin">
          <div className="flex gap-2">
            <div>چک دریافتی</div>
            <div>(ساعت 18:45)</div>
          </div>
          <div>21،525،000 ریال </div>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
