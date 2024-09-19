import {
  Button,
  CommonTextField,
  getJustNumber,
  useState,
  Yup,
  yupResolver,
  Controller,
  useForm,
} from "@src/imports";
import { SubmitRegisterFormInputType } from "@src/types/registerTypes";

const phoneRegExp = /^09\d{9}$/;

let formSchema = Yup.object().shape({
  name: Yup.string().required("نام خود را وارد کنید"),
  lastname: Yup.string().required("نام خانوادگی خود را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل حساب خود را وارد کنید")
    .matches(phoneRegExp, "لطفا موبایل معتبر وارد کنید"),
  usage: Yup.object().required("نوع استفاده را وارد کنید"),
  isAccpted: Yup.boolean(),
});

type SetValueDataType =
  | "name"
  | "lastname"
  | "phoneNumber"
  | "usage"
  | "isAccpted";

type RegisterFormPropsType = {
  submitHandler: (data: SubmitRegisterFormInputType) => void;
};

const RegisterForm: React.FC<RegisterFormPropsType> = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(formSchema),
    defaultValues: { isAccpted: false },
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState({
    nameIsValid: false,
    lastnameIsValid: false,
    phoneNumberIsValid: false,
    isAccptedIsValid: false,
  });

  const numberInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let justNumberValue = getJustNumber(value);
    const name = e.target.name as SetValueDataType;
    setValue(name, justNumberValue);
  };

  const isValidHandler = Object.values(isButtonDisabled).every(
    (val) => val === true
  );

  console.log(isButtonDisabled, "isButtonDisabled");

  return (
    <form
      className="w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit((data) => submitHandler(data))}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-[232px]">
          <CommonTextField
            name="name"
            label="نام"
            placeholder="نام خود را اینجا بنویسید"
            register={register}
            isRequired={true}
            error={errors.name?.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // setIsButtonDisabled({
              //   ...isButtonDisabled,
              //   nameIsValid: !!e.target.value.length,
              // });
            }}
            className="border-primary-700"
            type="text"
          />
        </div>
        <div className="w-[232px]">
          <CommonTextField
            name="lastname"
            label="نام خانوادگی"
            placeholder="نام خانوادگی خود را اینجا بنویسید"
            register={register}
            isRequired={true}
            error={errors.lastname?.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log({
                ...isButtonDisabled,
                lastnameIsValid: !!e.target.value.length,
              });
              setIsButtonDisabled({
                ...isButtonDisabled,
                lastnameIsValid: !!e.target.value.length,
              });
            }}
            className="border-primary-700"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-[232px]">
          <CommonTextField
            name="phoneNumber"
            label="شماره موبایل"
            placeholder="شماره موبایل خود را اینجا بنویسید"
            register={register}
            isRequired={true}
            error={errors.phoneNumber?.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              numberInputChangeHandler(e);
              // setIsButtonDisabled({
              //   ...isButtonDisabled,
              //   phoneNumberIsValid: !phoneRegExp.test(e.target.value.trim()),
              // });
            }}
            className="border-primary-700"
            type="number"
          />
        </div>
        <div className="w-[232px]">
          <div className=" w-full mb-2 flex items-center  ">
            <label htmlFor="usage" className={`w-full text-right text-paragh`}>
              نوع استفاده
            </label>
          </div>
          <select {...register("usage")} className="border-primary-700">
            <option value="individual">حقیقی</option>
            <option value="company">حقوقی</option>
          </select>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          {...register("isAccpted", {})}
          className="mx-3"
          onChange={(e) => {
            console.log(e, e);
            // setIsButtonDisabled({
            //   ...isButtonDisabled,
            //   isAccptedIsValid: e.target.checked,
            // });
          }}
        />
        <label htmlFor="isAccpted" className="text-xs">
          اینجانب &nbsp;
          <span className="text-tertiary-900 underline ">
            شرایط استفاده از خوش حساب
          </span>
          &nbsp; را خوانده و آن را می پذیرم.
        </label>
      </div>
      <div className="marginTop-lg">
        <Button
          className={`btn btn--tertiary w-[204px] h-[52px] ${
            !isValidHandler ? "btn--disable" : ""
          }`}
          disabled={isValidHandler}
        >
          ثبت نام
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
