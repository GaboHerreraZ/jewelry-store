"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteCategory } from "../../../actions/category/delete-category";
import { toastError, toastSuccess } from "@/utils/notifications";
import { useLoadingStore } from "@/store";

export const DeleteCategory = ({ id }: { id: string }) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const handleDelete = async () => {
    toggleLoading(true);
    try {
      const response = await deleteCategory(id);
      if (response) {
        toastSuccess("Categoría eliminada correctamente");
      }
    } catch (error) {
      toastError("Error eliminando categoría");
    }
    toggleLoading(false);
  };

  return (
    <button className="ml-2" onClick={handleDelete}>
      <FaRegTrashAlt size={20} />
    </button>
  );
};
