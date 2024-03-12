import { getOrder } from "@/actions";
import { updateOrder } from "@/actions/order/update-order";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, signature } = body;
    const { checksum } = signature;
    const { id, reference, payment_method_type, status } = data.transaction;

    const order = await getOrder(reference);

    if (order?.secretToken === checksum) {
      const response = await updateOrder(
        reference,
        status,
        id,
        payment_method_type
      );
      if (response?.ok) {
        return NextResponse.json({ status: 200 });
      }
    }
  } catch (e) {
    return NextResponse.json({ e });
  }
}
