import { useForm } from "react-hook-form";
import {
  Button,
  CommonTextField,
  getJustNumber,
  useState,
  Yup,
  yupResolver,
} from "@src/imports";
import { toPersianDigits } from "@src/utils/numberHelpers";
import { SubmitLoginFormInputType } from "@src/types/loginPageTypes";

const phoneRegExp = /^09\d{9}$/;

let formSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("شماره موبایل حساب خود را وارد کنید")
    .matches(phoneRegExp, "لطفا موبایل معتبر وارد کنید"),
});

type SetValueDataType = "phoneNumber";

type LoginFormPropsType = {
  submitHandler: (data: SubmitLoginFormInputType) => void;
};

const LoginForm: React.FC<LoginFormPropsType> = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const numberInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let justNumberValue = getJustNumber(value);
    console.log(toPersianDigits(+e.target.value));
    const name = e.target.name as SetValueDataType;

    setValue(name, justNumberValue);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit((data) => submitHandler(data))}
    >
      <p className="marginTop-lg text-paragh">
        شماره موبایل حساب خود را وارد کنید
      </p>
      <div className="w-[232px]">
        <CommonTextField
          name="phoneNumber"
          label=""
          placeholder="09000000000"
          register={register}
          isRequired={true}
          error={errors.phoneNumber?.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            numberInputChangeHandler(e);
            setIsButtonDisabled(!phoneRegExp.test(e.target.value.trim()));
          }}
          className="border-primary-700"
          dir="center"
          type="number"
        />
      </div>
      <div className="marginTop-lg">
        <Button
          className={`btn btn--tertiary w-[204px] h-[52px] ${
            isButtonDisabled ? "btn--disable" : ""
          }`}
          disabled={isButtonDisabled}
        >
          دریافت کد
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
