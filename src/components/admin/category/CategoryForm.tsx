import { createCategory } from "@/actions";
import Input from "@/components/ui/input/Input";
import { Base } from "@/interfaces/base";
import { useLoadingStore } from "@/store";
import { toastError, toastSuccess } from "@/utils/notifications";
import { Category } from "@prisma/client";
import { useForm } from "react-hook-form";

export const CategoryForm = ({
  category,
  setIsOpen,
}: {
  category: Category;
  setIsOpen: (state: boolean) => void;
}) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Base>({ defaultValues: category });

  const onSubmit = async (data: Base) => {
    toggleLoading(true);
    try {
      const response = await createCategory(data);
      if (response) toastSuccess("Categoría creada correctamente");
      setIsOpen(false);
      toggleLoading(false);
    } catch (error) {
      toastError("Error al crear categoría");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row md:flex-cols gap-2">
        <Input
          placeholder="Nombre"
          {...register("name", { required: true })}
          error={errors.name && "Nombre requerido"}
        />
        <Input
          placeholder="Descripción"
          {...register("description", { required: true })}
          error={errors.description && "Descripción requerida"}
        />
      </div>
      <div className="flex justify-end">
        <button className="button-gold mt-2 " type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
