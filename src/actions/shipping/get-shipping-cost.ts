"use server";
import { Shipping } from "@/interfaces/shipping";

export const getShippingCost = async (shipping: Shipping) => {
  const response = await fetch(
    `https://api.envioclickpro.com.co/api/v2/quotation`,
    {
      method: "POST",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_ENVIO_CLICK_API_KEY ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shipping),
    }
  );

  const data = await response.json();

  return data;
};
