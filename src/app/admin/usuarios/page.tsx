import { getUsers } from "@/actions/user/get-users";
import { UserGrid } from "@/components/admin";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function UsuariosPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { users, totalPages } = await getUsers({ page, take: 10 });

  return <UserGrid users={users} totalPages={totalPages} />;
}
