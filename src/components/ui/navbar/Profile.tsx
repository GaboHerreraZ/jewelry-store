import Link from "next/link";
import { CartButton } from "./CartButton";
import { ProfileButton } from "./ProfileButton";
import { FaUser } from "react-icons/fa";
import { getUser } from "@/actions";
import clsx from "clsx";

export const Profile = async ({ className }: { className?: string }) => {
  const { id, role } = await getUser();

  return (
    <div className={clsx("flex gap-5 justify-center items-center", className)}>
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
