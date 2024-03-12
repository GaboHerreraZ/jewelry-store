/*
  Warnings:

  - You are about to drop the column `linkTracking` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "linkTracking",
ADD COLUMN     "trackingLink" TEXT;
