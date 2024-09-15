import {
  Button,
  CommonTextField,
  getJustNumber,
  useState,
  Yup,
  yupResolver,
  useForm,
  IoIosRefresh,
} from "@src/imports";
import { SubmitCodeFormInputType } from "@src/types/loginPageTypes";

let formSchema = Yup.object().shape({
  code: Yup.string().required("کد را وارد کنید"),
});

type SetValueDataType = "code";

type CodeFormPropsType = {
  submitHandler: (data: SubmitCodeFormInputType) => void;
  timer: number;
  isTimerButtonDisable: boolean;
};

const CodeForm: React.FC<CodeFormPropsType> = ({
  submitHandler,
  timer,
  isTimerButtonDisable,
}) => {
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

  console.log(isTimerButtonDisable, "isTimerButtonDisable");

  const numberInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let justNumberValue = getJustNumber(value);
    const name = e.target.name as SetValueDataType;
    setValue(name, justNumberValue);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit((data) => submitHandler(data))}
    >
      <div className="w-[90%] flex justify-between gap-3  ">
        <div className="w-[50%]">
          <CommonTextField
            name="code"
            label=""
            placeholder="کد را وارد کنید"
            register={register}
            isRequired={true}
            error={errors.code?.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              numberInputChangeHandler(e);
              setIsButtonDisabled(!(e.target.value.length === 4));
            }}
            className="border-primary-700"
            dir="center"
            type="text"
          />
        </div>

        <div className="w-[50%] h-[40px] ">
          <Button
            className={`bg-white w-full text-xs border rounded-md flex  items-center gap-2 border-gray-400 text-gray-400  h-[40px] ${
              isTimerButtonDisable
                ? "btn--disable"
                : "border-gray-800 text-gray-800  px-4 py-3"
            }`}
            disabled={isTimerButtonDisable}
          >
            <div className="w-[20px]">
              {isTimerButtonDisable ? timer : <IoIosRefresh />}
            </div>
            <span>ارسال مجدد</span>
          </Button>
        </div>
      </div>
      <div className="marginTop-lg">
        <Button
          className={`btn btn--tertiary w-[204px] h-[52px] ${
            isButtonDisabled ? "btn--disable" : ""
          }`}
          disabled={isButtonDisabled}
        >
          ورود
        </Button>
      </div>
    </form>
  );
};

export default CodeForm;
