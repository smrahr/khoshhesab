import { ComponentProps } from "react";

type ButtonPropsType = {
  clasName?: string;
} & ComponentProps<"button">;

const Button = ({ children, className, ...rest }: ButtonPropsType) => {
  return (
    <button type="submit" className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
