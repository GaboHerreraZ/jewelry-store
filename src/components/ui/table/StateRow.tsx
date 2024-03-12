import clsx from "clsx";

interface Props {
  state: boolean;
  trueLabel: string;
  falseLabel: string;
}

export const StateRow = ({ state, trueLabel, falseLabel }: Props) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
      <span
        className={clsx(
          "relative inline-block px-3 py-1 font-semibold  leading-tight",
          {
            "text-green-900": state,
            "text-red-900": !state,
          }
        )}
      >
        <span
          aria-hidden
          className={clsx("absolute inset-0  opacity-50 rounded-full", {
            "bg-red-200": !state,
            "bg-green-200": state,
          })}
        ></span>
        <span className="relative">{state ? trueLabel : falseLabel}</span>
      </span>
    </td>
  );
};
