import {
  Link,
  useEffect,
  useState,
  CodeForm,
  Loading,
  LoginForm,
} from "@src/imports";
import {
  SubmitLoginFormInputType,
  SubmitCodeFormInputType,
} from "@src/types/loginPageTypes";

const WelcomeComponent = () => {
  return (
    <div className=" flex flex-col justify-center marginTop-lg">
      <h2 className="bold text-white paddingTop-md text-title">خوش آمدید</h2>
      <div className="paddingTop-md">
        <Loading />
      </div>
      <p className=" text-white paddingTop-md text-paragh ">
        در حال ورود به حساب شما در خوش حساب
      </p>
    </div>
  );
};

const LoginContent = () => {
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isTimerButtonDisable, setIsTimerButtonDisable] = useState(true);

  let interval: ReturnType<typeof setTimeout>;

  const submitLoginForm = (data: SubmitLoginFormInputType) => {
    console.log(data, "data");
    clearInterval(interval);

    setIsSendingCode(true);
    interval = setInterval(function () {
      setTimer((timer) => {
        if (timer === 0) {
          clearInterval(interval);
          setIsTimerButtonDisable(false);
          return 0;
        } else {
          return timer - 1;
        }
      });
    }, 1000);
  };

  const submitCodeForm = (data: SubmitCodeFormInputType) => {
    console.log(data, "data");
  };

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {true ? (
        <div className="container bg-white min-w-[296px] max-w-[70%] h-[450px] radius-sm">
          <h2 className="bold text-primary-900 paddingTop-md text-title ">
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
              <CodeForm
                submitHandler={submitCodeForm}
                timer={timer}
                isTimerButtonDisable={isTimerButtonDisable}
              />
              <div className="flex text-paragh justify-center items-center gap-2 marginTop-md">
                <Link to={"/"} className="underline bold text-[14px]">
                  ویرایش شماره همراه
                </Link>
              </div>
            </>
          )}
        </div>
      ) : (
        WelcomeComponent()
      )}
    </div>
  );
};

export default LoginContent;
