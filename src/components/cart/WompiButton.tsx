"use client";
import { useEffect } from "react";

interface Props {
  total: number;
  orderId: string;
  integrity: string;
  publicKey: string;
}

export const WompiButton = ({
  total,
  orderId,
  integrity,
  publicKey,
}: Props) => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://checkout.wompi.co/widget.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://checkout.wompi.co/widget.js";
      script.setAttribute("data-render", "button");
      script.setAttribute("data-public-key", publicKey);
      script.setAttribute("data-currency", "COP");
      script.setAttribute("data-amount-in-cents", `${total * 100}`);
      script.setAttribute("data-reference", orderId);
      script.setAttribute("data-signature:integrity", integrity);

      script.setAttribute(
        "data-redirect-url",
        "http://bellartejoyeria.com/confirmacion-pago"
      );

      const container = document.getElementById("wompi-button");
      if (container) {
        container.appendChild(script);
      }
    }
  }, [publicKey, total, orderId, integrity]);

  return (
    <form className="relative">
      <div id="wompi-button"></div>
    </form>
  );
};
