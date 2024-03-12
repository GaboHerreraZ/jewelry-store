export const getSecretTokenWompi = async (
  orderId: string,
  total: number,
  integritySecret: string
) => {
  console.log(orderId);
  console.log(total);
  console.log(integritySecret);

  const concatedString = `${orderId}${total * 100}COP${integritySecret}`;
  const encondedText = new TextEncoder().encode(concatedString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
};
