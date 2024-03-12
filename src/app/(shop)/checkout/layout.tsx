import { CartSummary } from "@/components";

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:flex-row gap-2 md:px-20 mt-20 ">
      <div className="w-full md:w-2/3">{children}</div>
      <div className="w-full md:w-1/3">
        <CartSummary />
      </div>
    </section>
  );
}
