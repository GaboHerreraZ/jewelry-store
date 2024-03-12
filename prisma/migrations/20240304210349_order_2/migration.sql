/*
  Warnings:

  - You are about to drop the column `referenceId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ProductOrder` table. All the data in the column will be lost.
  - Added the required column `secretToken` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "referenceId",
ADD COLUMN     "secretToken" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."ProductOrder" DROP COLUMN "updatedAt";
