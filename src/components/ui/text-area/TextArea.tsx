import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  className?: string;
  required?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, IProps>(
  ({ placeholder, error, className, ...rest }, ref) => {
    return (
      <div className="z-10">
        <label className="grid ">
          <span className="text-sm font-bold">
            {placeholder}
            {rest.required ? "*" : ""}
          </span>
          <textarea
            ref={ref}
            {...rest}
            className={`${className}  z-50 bg-transparent shadow border-[0.5px]  px-2 py-1 focus:border-gold focus:border-[1px]  outline-none`}
            placeholder={`${placeholder}${rest.required ? " *" : ""}`}
          />
        </label>
        <small className="text-red-500 text-xs">{error}</small>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
