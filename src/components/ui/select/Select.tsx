import { Base } from "@/interfaces/base";
import { InputHTMLAttributes, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
  error?: string;
  className?: string;
  required?: boolean;
  options: Base[];
}

const Select = forwardRef<HTMLSelectElement, IProps>(
  ({ placeholder, error, options, ...rest }, ref) => {
    return (
      <div>
        <label className="grid">
          <span className="text-sm font-bold">{placeholder}</span>
          <select
            className="bg-transparent shadow border-[0.5px]  px-2 py-1 focus:border-gold focus:border-[1px] text-raffle-text outline-none"
            {...rest}
            ref={ref}
          >
            <>
              {options.map((option) => (
                <option className="rounded" key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </>
          </select>
        </label>
        <small className="text-red-500 text-xs">{error}</small>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
