import { dateFormat } from "@/utils";

export const DateRow = ({ date }: { date: Date }) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
      <p className="text-gray-900 whitespace-no-wrap">
        {dateFormat(date, "es")}
      </p>
    </td>
  );
};
