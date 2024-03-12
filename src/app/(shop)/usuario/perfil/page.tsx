import { getUser, getUserByAuthId } from "@/actions";
import { Profile } from "@/components/profile";
import { User } from "@/interfaces/user";
import { notFound } from "next/navigation";

export default async function ProfilePage() {
  const { id, email } = await getUser();

  if (!id) notFound();

  const user = await getUserByAuthId(id);

  const newUser = user
    ? user
    : ({
        email,
        authId: id,
      } as User);

  return (
    <section className="grid my-5 md:mt-20 z-10 justify-center items-center  ">
      <Profile user={newUser} disabled={false} />;
    </section>
  );
}
