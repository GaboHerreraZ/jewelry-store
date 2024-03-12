"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { toastError, toastSuccess } from "@/utils/notifications";
import { useLoadingStore } from "@/store";
import { deleteSubcategory } from "@/actions";

export const DeleteSubcategory = ({ id }: { id: string }) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const handleDelete = async () => {
    toggleLoading(true);
    try {
      const response = await deleteSubcategory(id);
      if (response) {
        toastSuccess("Subcategoría eliminada correctamente");
      }
    } catch (error) {
      toastError("Error eliminando subcategoría");
    }
    toggleLoading(false);
  };

  return (
    <button className="ml-2" onClick={handleDelete}>
      <FaRegTrashAlt size={20} />
    </button>
  );
};
