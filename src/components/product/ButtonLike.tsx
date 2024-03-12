"use client";
import { createDesiredProduct } from "@/actions";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export const ButtonLike = ({
  authId,
  productId,
  desiredProduct,
}: {
  authId?: string;
  productId: string;
  desiredProduct: { productId: string; userId: string }[];
}) => {
  const [like, setLike] = useState(
    desiredProduct.some((p) => p.productId === productId && p.userId === authId)
  );

  const handleLike = async () => {
    await createDesiredProduct(productId, authId!);
    setLike(!like);
  };

  return (
    <>
      {authId ? (
        <button onClick={handleLike} className=" text-white ">
          {like ? <IoMdHeart size={30} /> : <IoMdHeartEmpty size={30} />}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
