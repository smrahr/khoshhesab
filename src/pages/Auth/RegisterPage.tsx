import { RegisterForm } from "@src/imports";
import { SubmitRegisterFormInputType } from "@src/types/registerTypes";

const RegisterPage = () => {
  const submitRegisterHandler = (data: SubmitRegisterFormInputType) => {
    console.log(data, "data");
  };
  return (
    <div className="pt-[72px]">
      <div className="container bg-white min-w-[296px] max-w-[70%] radius-sm px-[34px] py-[72px]">
        <h2 className="bold text-primary-900 text-title">ثبت نام</h2>
        <div className="paddingTop-md">
          <RegisterForm submitHandler={submitRegisterHandler} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
