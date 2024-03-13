"use client";
import { Contact } from "@/interfaces/contact";
import { useForm } from "react-hook-form";
import Input from "../ui/input/Input";
import TextArea from "../ui/text-area/TextArea";
import { useLoadingStore } from "@/store";

export const ContactForm = () => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<Contact>();

  const onSubmit = async (data: Contact) => {
    console.log(data);
    toggleLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      reset();
    } catch (error) {
      console.error(error);
    }
    toggleLoading(false);
  };

  return (
    <section className="grid justify-center px-2 md:px-20 mt-10">
      <h1 className="text-center font-bold text-3xl">Contáctanos </h1>
      <p className="text-center md:px-20 text-lg mt-5">
        Contáctanos y cuéntanos cómo podemos ayudarte. ¿Tienes una pregunta pero
        no sabes a quién dirigirte?
      </p>
      <p className="text-center md:px-20 text-lg">
        Escríbenos y un integrante de nuestro equipo se pondrá en contacto.
      </p>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
          <Input
            {...register("subject", { required: true })}
            placeholder="Asunto"
            error={errors.subject && "Asunto requerido"}
          />
          <Input
            {...register("name", { required: true })}
            placeholder="Nombre"
            error={errors.name && "Nombre requerido"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
          <Input
            {...register("email", { required: true })}
            placeholder="Correo electrónico"
            error={errors.email && "Correo electrónico requerido"}
          />
          <Input {...register("phone")} placeholder="Número de teléfono" />
        </div>
        <TextArea
          {...register("message", { required: true })}
          placeholder="Mensaje"
          error={errors.message && "Mensaje requerido"}
        />
        {isSubmitSuccessful && (
          <div className="flex mt-5 p-5 w-full rounded bg-gold/40 text-gold">
            <p>
              ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        )}

        <div className="flex justify-center  md:justify-end">
          <button type="submit" className="button-gold mt-5">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};
