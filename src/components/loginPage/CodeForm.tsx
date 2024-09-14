import { useForm } from "react-hook-form";
import {
  Button,
  CommonTextField,
  getJustNumber,
  useState,
  Yup,
  yupResolver,
} from "@src/imports";
import { SubmitCodeFormInputType } from "@src/types/loginPageTypes";

let formSchema = Yup.object().shape({
  code: Yup.string().required("کد را وارد کنید"),
});

type SetValueDataType = "code";

type CodeFormPropsType = {
  submitHandler: (data: SubmitCodeFormInputType) => void;
  timer: number;
};

const CodeForm: React.FC<CodeFormPropsType> = ({ submitHandler, timer }) => {
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
    const name = e.target.name as SetValueDataType;
    setValue(name, justNumberValue);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit((data) => submitHandler(data))}
    >
      <div className="w-[232px] flex gap-3">
        <div>
          <CommonTextField
            name="code"
            label=""
            placeholder="کد را وارد کنید"
            register={register}
            isRequired={true}
            error={errors.code?.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              numberInputChangeHandler(e);
            }}
            className="border-primary-700"
            dir="center"
            type="text"
          />
        </div>

        <div className="text-xs w-[200px] h-[40px] border border-gray-400 rounded-md flex justify-center items-center gap-2 text-gray-400">
          <span>{timer}</span>
          <span>ارسال مجدد</span>
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
