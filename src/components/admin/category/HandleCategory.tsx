"use client";
import { Modal } from "@/components/ui/modal/Modal";
import { Base } from "@/interfaces/base";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { CategoryForm } from "./CategoryForm";

export const HandleCategory = ({
  category,
  isEdit,
}: {
  category: Base;
  isEdit: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isEdit) {
    return (
      <>
        {isClient ? (
          <>
            <button onClick={() => setIsOpen(true)}>
              <FaEdit size={20} />
            </button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              header={category?.id ? "Editar Categoría" : "Nueva Categoría"}
            >
              <div className="mt-2">
                <CategoryForm category={category} setIsOpen={setIsOpen} />
              </div>
            </Modal>
          </>
        ) : (
          ""
        )}
      </>
    );
  }

  return (
    <>
      <button className="button-gold" onClick={() => setIsOpen(true)}>
        Agregar Categoría
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={category?.id ? "Editar Categoría" : "Nueva Categoría"}
      >
        <div className="mt-2">
          <CategoryForm category={category} setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </>
  );
};
