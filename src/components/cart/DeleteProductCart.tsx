import { Product } from "@/interfaces/product";
import { useCartStore, usePaymentStore } from "@/store";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

export const DeleteProductCart = ({ product }: { product: Product }) => {
  const deleteProduct = useCartStore((state) => state.deleteProduct);
  const created = usePaymentStore((state) => state.created);

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  return (
    <div className="flex ml-4 justify-center ">
      <button
        disabled={created}
        className={clsx("", {
          "disabled:opacity-25": created,
        })}
        onClick={handleDelete}
      >
        <IoMdClose size={20} />
      </button>
    </div>
  );
};
