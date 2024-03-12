export const getPayment = async (id: string) => {
  const url = process.env.NEXT_PUBLIC_WOMPI_API;

  const response = await fetch(`${url}/${id}`, {
    method: "GET",
  });

  return await response.json();
};
