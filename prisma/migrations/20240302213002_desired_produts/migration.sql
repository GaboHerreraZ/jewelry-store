-- CreateTable
CREATE TABLE "public"."DesiredProduct" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DesiredProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."DesiredProduct" ADD CONSTRAINT "DesiredProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DesiredProduct" ADD CONSTRAINT "DesiredProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("authId") ON DELETE RESTRICT ON UPDATE CASCADE;
