import { Base } from "@/interfaces/base";

interface Props {
  base: Base[];
  id: string;
}

export const BaseRow = ({ base, id }: Props) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
      <p className="text-gray-900 whitespace-no-wrap">
        {base.find((b) => b.id === id)?.name}
      </p>
    </td>
  );
};
