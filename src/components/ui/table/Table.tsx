import { Column } from "@/interfaces/column";
import { Pagination } from "./Pagination";

interface Props {
  columns: Column[];
  children: React.ReactNode;
  totalPages: number;
}

export const Table = ({ columns, children, totalPages }: Props) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-5 py-3 border-b-[1px] border-gold bg-slate-950 text-left text-xs font-semibold text-gold uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
        {totalPages !== 0 && <Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
};
