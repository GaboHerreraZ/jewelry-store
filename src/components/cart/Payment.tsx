import { PaymentSummary } from "./PaymentSummary";
import { CartProductSummary } from "./CartProductSummary";

interface Props {
  authId: string;
  wholesaler: boolean;
}

export const Payment = ({ authId, wholesaler }: Props) => {
  return (
    <section>
      <CartProductSummary authId={authId} summary={true} />
      <PaymentSummary authId={authId} wholesaler={wholesaler} />
    </section>
  );
};
