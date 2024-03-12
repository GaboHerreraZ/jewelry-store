"use client";
import { Address } from "@/interfaces/address";
import { useForm } from "react-hook-form";
import Select from "../ui/select/Select";
import { DEPARTAMENTOS } from "@/utils/constant";
import { useState } from "react";
import { Base } from "@/interfaces/base";
import { getCitiesByDepartment } from "@/utils/getCities";
import Input from "../ui/input/Input";
import { useLoadingStore } from "@/store";
import { createUpdateAddress } from "@/actions/address";
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from "@/utils/notifications";
import Checkbox from "../ui/checkbox/Checkbox";
import Link from "next/link";
import { dateFormat } from "@/utils";

interface Props {
  address?: Partial<Address>;
  authId: string;
}

export const AddressForm = ({ address, authId }: Props) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);
  const router = useRouter();

  const [cities, setCities] = useState<Base[]>(
    getCitiesByDepartment(
      address?.departmentCode ? address.departmentCode : DEPARTAMENTOS[0].id
    )
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({ defaultValues: address });

  const onSubmit = async (data: Address) => {
    toggleLoading(true);
    data.userId = authId;
    data.department = DEPARTAMENTOS.find(
      (d) => d.id === data.departmentCode
    )?.description!;
    data.city = cities.find((c) => c.id === data.cityCode)?.description!;

    try {
      const response = await createUpdateAddress(data);
      toggleLoading(true);
      if (response.ok) {
        toastSuccess("Dirección guardada");
        router.replace(`/usuario/mi-direccion/${response.address?.id}`);
      }
    } catch (error) {
      toastError("Error guardando dirección");
    }

    toggleLoading(false);
  };

  const onChangeDepartment = (value: string) => {
    setCities(getCitiesByDepartment(value));
  };

  return (
    <section className="grid mt-5 md:mt-20 justify-center">
      <header className="flex justify-between pb-5 border-b-[1px] border-gray-200 font-bold text-3xl min-w-[280px] md:min-w-[640px]">
        <h1 className="">
          {address?.id ? "Editar dirección" : "Nueva dirección"}
        </h1>
        <h1 className="text-end">
          <Link
            href={`/usuario/mis-direcciones`}
            className="underline italic font-bold my-2 text-sm"
          >
            Volver
          </Link>
        </h1>
      </header>
      <p className="text-xs text-end">
        Ùltima actualización:{" "}
        <span className="font-bold">
          {dateFormat(address?.updatedAt!, "es")}
        </span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid  mt-5 gap-2 grid-cols-1 md:grid-cols-2">
          <Input
            {...register("name", { required: true })}
            placeholder="Nombre"
            error={errors.name && "Nombre requerido"}
          />
          <Input
            {...register("lastName", { required: true })}
            placeholder="Apellidos"
            error={errors.lastName && "Apellidos requeridos"}
          />
          <Select
            placeholder="Departamento"
            {...register("departmentCode", {
              required: true,
              onChange: (e) => onChangeDepartment(e.target.value),
            })}
            error={errors.departmentCode && "Departamento requerido"}
            options={DEPARTAMENTOS}
          />
          <Select
            placeholder="Ciudad"
            {...register("cityCode", { required: true })}
            error={errors.cityCode && "Ciudad requerida"}
            options={cities}
          />
          <Input
            {...register("address", { required: true })}
            placeholder="Dirección"
            error={errors.address && "Dirección requeridos"}
          />
          <Input {...register("postalCode")} placeholder="Código Postal" />
          <Input
            {...register("additional")}
            placeholder="Información Adicional"
          />
          <Checkbox {...register("main")} placeholder="Dirección Principal" />
        </div>
        <div className="text-end mt-5">
          <button type="submit" className="button-gold">
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};
