import { Column } from "@/interfaces/column";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { ActionRow, DateRow, Table, TextRow } from "@/components/ui";
import { currencyFormat } from "@/utils/currenyFormat";
import { ORDER_STATUS, SHIPIING_STATUS } from "@/utils/constant";
import { BiSolidEdit } from "react-icons/bi";

interface Props {
  orders: OrderCheckout[];
  totalPages: number;
}

const columns: Column[] = [
  { label: "Email contacto" },
  { label: "Teléfono contacto" },
  { label: "Dirección" },
  { label: "Total" },
  { label: "Número Artículos" },
  { label: "Estado" },
  { label: "Estado Pago" },
  { label: "Fecha Creación" },
  { label: "Acciones" },
];

export const OrderGrid = ({ orders, totalPages }: Props) => {
  return (
    <>
      <header className="flex justify-between items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Ordenes</h1>
      </header>
      <Table columns={columns} totalPages={totalPages}>
        {orders.map((order) => (
          <tr key={order.id}>
            <TextRow label={`${order.address.email}`} />
            <TextRow label={order.address.phone} />
            <TextRow
              label={`${order.address.address?.address} ${order.address.address?.additional}`}
            />
            <TextRow label={currencyFormat(order.total)} />
            <TextRow label={order.items.length} />
            <TextRow
              label={
                SHIPIING_STATUS.find((o) => o.id === order.shippingStatus)
                  ?.name!
              }
            />
            <TextRow
              label={ORDER_STATUS.find((o) => o.id === order.status)?.name!}
            />
            <DateRow date={order.createdAt} />
            <ActionRow
              actions={[
                {
                  icon: <BiSolidEdit size={25} />,
                  href: `/admin/orden/${order.id}`,
                  id: order.id!,
                },
              ]}
            />
          </tr>
        ))}
      </Table>
    </>
  );
};
