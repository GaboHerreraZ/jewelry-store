import { InputHTMLAttributes, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ type, placeholder, error, className, ...rest }, ref) => {
    return (
      <div className="z-10">
        <label className="grid ">
          <span className="text-sm font-bold">
            {placeholder}
            {rest.required ? "*" : ""}
          </span>
          <input
            ref={ref}
            {...rest}
            type={type}
            className={`${className}  z-50 bg-transparent shadow border-[0.5px]  px-2 py-1 focus:border-gold focus:border-[1px]  outline-none`}
            placeholder={`${placeholder}${rest.required ? " *" : ""}`}
          />
        </label>
        <small className="text-red-500 text-xs">{error}</small>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
