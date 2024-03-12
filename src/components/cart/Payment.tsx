"use client";

import { PaymentSummary } from ".";
import { CartProductSummary } from "./CartProductSummary";

interface Props {
  authId: string;
}

export const Payment = ({ authId }: Props) => {
  return (
    <section>
      <CartProductSummary authId={authId} summary={true} />
      <PaymentSummary authId={authId} />
    </section>
  );
};
