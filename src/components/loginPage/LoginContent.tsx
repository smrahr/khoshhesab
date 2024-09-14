import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import { toPersianDigits } from "@src/utils/numberHelpers";
import CodeForm from "./CodeForm";
import {
  SubmitLoginFormInputType,
  SubmitCodeFormInputType,
} from "@src/types/loginPageTypes";

const LoginContent = () => {
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [timer, setTimer] = useState(90);
  let interval: ReturnType<typeof setTimeout>;

  const submitLoginForm = (data: SubmitLoginFormInputType) => {
    clearInterval(interval);

    setIsSendingCode(true);
    interval = setInterval(function () {
      setTimer((count) => count - 1);
    }, 1000);

    console.log(interval, "interval");
  };

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  const submitCodeForm = (data: SubmitCodeFormInputType) => {
    console.log(data, "data");
  };
  return (
    <div className="container bg-white w-[296px] h-[450px] radius-sm">
      <h2 className="bold text-primary-900 paddingTop-md text-title">
        ورود به خوش حساب
      </h2>
      {/* !isSendingCode */}
      {!isSendingCode ? (
        <>
          <LoginForm submitHandler={submitLoginForm} />
          <div className="flex text-paragh justify-center items-center gap-2 marginTop-md">
            <p>حساب کاربری ندارید؟ </p>
            <Link to={"/"} className="underline bold text-[14px]">
              ثبت نام کنید
            </Link>
          </div>
        </>
      ) : (
        <>
          <p className="text-[12px] p-4">
            کد چهار رقمی ارسال شده به شماره <span>09025525849</span>
            را وارد کنید
          </p>
          <CodeForm submitHandler={submitCodeForm} timer={timer} />
          <div className="flex text-paragh justify-center items-center gap-2 marginTop-md">
            <Link to={"/"} className="underline bold text-[14px]">
              ویرایش شماره همراه
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginContent;
