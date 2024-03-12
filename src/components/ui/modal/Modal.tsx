"use client";

import { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  header: string;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose, header }: Props) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-40"
          onClick={() => closeModal()}
        >
          <div
            className="bg-white px-6  py-2 rounded shadow-lg transition-opacity duration-300"
            style={{
              animation: `${isOpen ? "fadeIn" : "fadeOut"} 300ms ease`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <h1 className="my-2 text-2xl font-bold">{header}</h1>
              <button onClick={closeModal}>
                <IoMdClose size={20} />
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
