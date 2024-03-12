import { Table, TextRow } from "@/components/ui";
import { Base } from "@/interfaces/base";
import { Column } from "@/interfaces/column";
import { HandleSubcategory } from "./HandleSubcategory";
import { DeleteSubcategory } from "./DeleteSubcategory";

const columns: Column[] = [
  { label: "Nombre" },
  { label: "Descripción" },
  { label: "Acciones" },
];

export const SubcategoryGrid = ({
  subcategories,
}: {
  subcategories: Base[];
}) => {
  return (
    <div className="mt-5">
      <header className="flex flex-col md:flex-row pb-2 justify-between md:items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Subcategorías</h1>
        <HandleSubcategory category={{} as Base} isEdit={false} />
      </header>
      <Table columns={columns} totalPages={0}>
        {subcategories.map((subcategory) => {
          return (
            <tr key={subcategory.id}>
              <TextRow label={subcategory.name} />
              <TextRow label={subcategory.description} />
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <HandleSubcategory category={subcategory} isEdit={true} />
                <DeleteSubcategory id={subcategory.id} />
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};
