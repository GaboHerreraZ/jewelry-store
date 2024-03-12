"use client";

import Input from "@/components/ui/input/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const RecoveryPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>();

  const onSubmit = (data: { email: string }) => {};

  return (
    <div className="mt-20 flex mx-auto items-center justify-center">
      <div className="w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center text-slate-950 mt-8 mb-6">
          Recuperación de contraseña
        </h1>
        <p className="text-lg text-slate-950 text-center mt-8 mb-6">
          Introduce tu correo electrónico para restablecer tu contraseña
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2  w-full">
          <Input
            {...register("email", { required: true })}
            placeholder="Introduce correo electrónico"
          />
          <button type="submit" className="button-gold">
            Enviar
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Volver a
            <Link href="/auth/login" className="text-gold font-bold ml-2">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
