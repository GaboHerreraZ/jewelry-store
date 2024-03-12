/*
  Warnings:

  - Added the required column `shippingStatus` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ShippingStatus" AS ENUM ('inProgress', 'shipped', 'delivered');

-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "shippingStatus" "public"."ShippingStatus" NOT NULL;
