import Link from "next/link";
import { CartButton } from "./CartButton";
import { ProfileButton } from "./ProfileButton";
import { FaUser } from "react-icons/fa";
import { getUser } from "@/actions";

export const Profile = async () => {
  const { id, role } = await getUser();

  return (
    <div className="flex absolute top-3 right-10 gap-5 justify-center items-center">
      {role !== "admin" && <CartButton />}

      {!id ? (
        <Link href="/auth/login" className="text-gold">
          <FaUser size={25} />
        </Link>
      ) : (
        <>{role !== "admin" && <ProfileButton />}</>
      )}
    </div>
  );
};
