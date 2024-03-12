import { InputHTMLAttributes, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, IProps>(
  ({ placeholder, className, ...rest }, ref) => {
    return (
      <div className="flex mt-5  flex-row items-center">
        <input
          ref={ref}
          {...rest}
          id={placeholder}
          type="checkbox"
          className="appearance-none h-6 w-6  border-[1px] border-slate-200 rounded-full checked:bg-gold checked:scale-75 transition-all duration-200 peer"
        />
        <div className="h-6 w-6 absolute rounded-full pointer-events-none peer-checked:bg-white peer-checked:border-gold peer-checked:border-2"></div>
        <label
          htmlFor={placeholder}
          className="flex flex-col font-bold justify-center px-2 peer-checked:text-gold text-raffle-text select-none"
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
