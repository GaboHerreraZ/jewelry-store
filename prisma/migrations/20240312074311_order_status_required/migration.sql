/*
  Warnings:

  - Made the column `status` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Order" ALTER COLUMN "status" SET NOT NULL;
