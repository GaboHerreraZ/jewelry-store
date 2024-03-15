import { Column } from "@/interfaces/column";
import { User } from "@/interfaces/user";
import { ActionRow, DateRow, StateRow, Table, TextRow } from "@/components/ui";
import { GENDERS } from "@/utils/constant";
import { BiSolidEdit } from "react-icons/bi";

interface Props {
  users: User[];
  totalPages: number;
}

const columns: Column[] = [
  { label: "Nombre" },
  { label: "Email" },
  { label: "Phone" },
  { label: "Perfil Completo" },
  { label: "Genero" },
  { label: "Rol" },
  { label: "Fecha Creación" },
  { label: "Acciones" },
];

export const UserGrid = ({ users, totalPages }: Props) => {
  return (
    <section className="container md:mx-auto px-2 lg:px-10 mt-5">
      <header className="flex justify-between items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Usuarios</h1>
      </header>
      <Table columns={columns} totalPages={totalPages}>
        {users.map((user) => (
          <tr key={user.id}>
            <TextRow label={`${user.name} ${user.lastName}`} />
            <TextRow label={user.email} />
            <TextRow label={user.phone} />
            <StateRow
              state={user.completeProfile}
              falseLabel="No"
              trueLabel="Si"
            />
            <TextRow label={GENDERS.find((g) => g.id === user.gender)?.name!} />
            <StateRow
              state={user.wholesaler}
              falseLabel="Detalista"
              trueLabel="Mayorista"
            />
            <DateRow date={user.createdAt} />
            <ActionRow
              actions={[
                {
                  icon: <BiSolidEdit size={25} />,
                  href: `/admin/usuario/${user.authId}`,
                  id: user.authId,
                },
              ]}
            />
          </tr>
        ))}
      </Table>
    </section>
  );
};
