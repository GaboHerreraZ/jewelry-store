import { FaCheckCircle } from "react-icons/fa";
import { PaymentConfirmation as Payment } from "@/interfaces/paymentConfirmation";
import { currencyFormat } from "@/utils/currenyFormat";
import Link from "next/link";

export const PaymentConfirmation = ({ payment }: { payment: Payment }) => {
  return (
    <section className="container mx-auto max-w-[580px] min-w-[280px]  mt-20 shadow rounded py-10 px-10">
      <header>
        {payment.data.status === "APPROVED" && (
          <div className="grid justify-center">
            <div className="flex justify-center flex-col">
              <label className="flex justify-center">
                <FaCheckCircle className="text-green-500" size={40} />
              </label>
              <h1 className="font-bold text-xl text-center ">
                Gracias por tu compra
              </h1>
              <p>
                Tu pago de {currencyFormat(payment.data.amount_in_cents / 100)}{" "}
                ha sido procesado exitosamente.{" "}
              </p>
            </div>
          </div>
        )}
      </header>
      <div className="mt-2 text-center">
        <p>
          En <span className="text-gold font-bold">BellArte</span> Joyería,
          apreciamos tu preferencia y estamos emocionados de que lleves un poco
          de nuestra esencia contigo.
        </p>
        <p className="mt-2 font-bold">
          Te hemos enviado un correo con los detalles de tu compra.
        </p>
      </div>
      <footer className=" mt-4 flex flex-col justify-center">
        <div className="text-center">
          <p>
            Si tienes alguna pregunta o inquietud, no dudes en contactarnos a:
          </p>
          <a className="font-bold" href="mailto:info@bellartejoyeria.com">
            info@bellartejoyeria.com
          </a>
        </div>

        <label className="text-center mt-4">
          <Link className="button-gold" href="/">
            Volver a la tienda
          </Link>
        </label>
      </footer>
    </section>
  );
};
