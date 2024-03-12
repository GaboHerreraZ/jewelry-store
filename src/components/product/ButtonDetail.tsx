import Link from "next/link";

export const ButtonDetail = ({ id }: { id: string }) => {
  return (
    <div className="px-4 w-full mt-1  flex justify-center">
      <Link
        href={`/producto/${id}`}
        className="px-4 py-1 w-full text-center border-[1px] border-white text-white font-bold  "
      >
        Ver Detalle
      </Link>
    </div>
  );
};
