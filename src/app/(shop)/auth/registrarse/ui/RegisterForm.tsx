"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/input/Input";
import { Login } from "@/interfaces/login";
import { useLoadingStore } from "@/store";
import { signup } from "@/actions";

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const handleSinUp = async (login: Login) => {
    toggleLoading(true);
    const { error } = await signup(login.email, login.password);

    if (error) {
      setErrorMessage(error.message);
    } else {
      router.replace("/auth/registrarse/confirmacion");
    }

    toggleLoading(false);
  };

  return (
    <div className="grid p-5 md:p-0 mt-20 w-full items-center justify-center py-10">
      <div className="flex w-full md:w-[280px] flex-col rounded  md:flex-row shadow-md">
        <div className="w-full p-5 ">
          <header className=" flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-semibold m-0 text-gold text-center">
              Empieza tu Viaje con Esplendor
            </h1>
            <h3 className="m-0 text-lg text-slate-950">
              Registrate con nosotros!
            </h3>
          </header>

          <form className="mt-1" onSubmit={handleSubmit(handleSinUp)}>
            <div className="grid gap-2">
              <Input
                {...register("email", { required: true })}
                error={errors.password && "Ingresa una email"}
                placeholder="Ingresa Email"
              />
              <Input
                {...register("password", { required: true })}
                type="password"
                error={errors.password && "Ingresa una contraseña"}
                placeholder="Ingresa contraseña"
              />
            </div>

            <div>
              {errorMessage && (
                <p className="bg-red-700 text-center text-white p-2 my-2">
                  {errorMessage}
                </p>
              )}
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="mb-1.5 block w-full text-center button-gold text-gold "
              >
                Crear cuenta
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-slate-950 font-semibold">
            <Link href="/">¿Olvidaste tu contraseña?</Link>
          </p>
          <h3 className="text-sm text-center text-slate-950 font-semibold">
            ¿ya tienes cuenta?
            <Link className="text-gold ml-2" href="/auth/login">
              Inicia Sesión
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
