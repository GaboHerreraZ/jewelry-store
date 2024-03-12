import { Action } from "@/interfaces/action";
import Link from "next/link";

export const ActionRow = ({ actions }: { actions: Action[] }) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
      {actions.map((action, index) => {
        return (
          <div key={index} className="text-slate-950">
            {action.href ? (
              <Link href={action.href}>{action.icon}</Link>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </td>
  );
};
