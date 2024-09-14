import { useState, FaRegEyeSlash, FaRegEye } from "@imports";
import { toPersianDigits } from "@src/utils/numberHelpers";

interface TextFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  extraData?: string;
  error?: string;
  dir?: string;
  register: (name: string) => {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    ref: React.Ref<HTMLInputElement>;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  extraStyle?: string;
  maxLength?: number;
  darkLabel?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  extraData = "",
  error,
  dir = "",
  register,
  onChange = () => {},
  onBlur = null,
  extraStyle = "",
  maxLength,
  darkLabel = false,
  disabled = false,
  isRequired = false,
  className = "",
}) => {
  const [showPass, setShowPass] = useState(false);
  const onChangeValue = onChange || register(name).onChange;
  const onBlurValue = onBlur || register(name).onBlur;

  return (
    <div>
      {label && (
        <div className=" w-full mb-2 flex items-center  ">
          <label htmlFor={name} className={`w-full text-right text-paragh`}>
            {label}
          </label>
        </div>
      )}

      <div className="flex items-center gap-2">
        {type === "password" ? (
          <label htmlFor={name} className="textField__input flex">
            <input
              onBlurCapture={onBlurValue}
              autoComplete="new-password"
              className="flex w-[100%] h-full ml-2 outline-none"
              type={showPass ? "text" : "password"}
              name={name}
              id={name}
              {...register(name)}
              onChange={onChangeValue}
              maxLength={maxLength}
            />
            <span
              className="w-fit flex items-center justify-center cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </label>
        ) : (
          <input
            onBlurCapture={onBlurValue}
            disabled={disabled}
            dir={`${type === "number" ? "ltr" : "rtl"}`}
            placeholder={placeholder}
            autoComplete="off"
            className={`${className} ${
              disabled ? "textField__disabled" : ""
            } textField__input ${extraStyle} ${
              type === "number" ? "text-left" : "text-right"
            } ${dir === "center" ? "textField__center" : ""}`}
            type="text"
            name={name}
            id={name}
            {...register(name)}
            onChange={onChangeValue}
            maxLength={maxLength}
          />
        )}

        {!!extraData && (
          <span
            className="dark:text-darkText"
            dir={`${type === "number" ? "ltr" : "rtl"}`}
          >
            {extraData}
          </span>
        )}
      </div>
      <p className="text-error text-xs font-bold mt-2">{error}</p>
    </div>
  );
};
export default TextField;
