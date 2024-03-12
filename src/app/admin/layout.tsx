import { getUser } from "@/actions";
import { Dashboard } from "@/components/ui";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = await getUser();

  if (!id) redirect("/auth/login");

  return <Dashboard>{children}</Dashboard>;
}
