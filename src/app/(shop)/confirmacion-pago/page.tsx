import { getPayment } from "@/actions";
import { PaymentConfirmation } from "@/components";

interface Props {
  searchParams: {
    id: string;
  };
}

export default async function PaymentConfirmationPage({ searchParams }: Props) {
  const { id } = searchParams;

  const payment = await getPayment(id);

  return <PaymentConfirmation payment={payment} />;
}
