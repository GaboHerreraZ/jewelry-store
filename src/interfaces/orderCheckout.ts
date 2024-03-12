import { Address } from "@/interfaces/address";
import { User } from "@/interfaces/user";
import { ProductOrder } from "../components/product/ProductOrder";
import { Product } from "@/interfaces/product";
import { OrderStatus, ShippingStatus } from "@/utils/constant";

export interface OrderCheckout {
  id?: string;
  total: number;
  isPaid?: boolean;
  paidAt?: Date;
  paymentId?: string;
  paymentMethod?: string;
  status: OrderStatus;
  secretToken?: string;
  createdAt: Date;
  userId: string;
  user?: User;
  address: OrderAddress;
  shippingStatus: ShippingStatus;
  items: ProductOrder[] | any[];
  trackingLink?: string;
}

export interface OrderAddress {
  id?: string;
  email: string;
  phone: string;
  orderId?: string;
  addressId: string;
  address?: Address;
}

export interface ProductOrder {
  id?: string;
  quantity: number;
  price: number;
  createdAt: Date;
  orderId?: string;
  productId: string;
  product?: Product;
}
