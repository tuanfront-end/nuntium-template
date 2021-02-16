import ButtonOpenModal from "components/Modal/ButtonOpenModal";
import React from "react";

function BtnOpenMenu() {
  return (
    <ButtonOpenModal
      modalId="wil-modal-navigation-mobile"
      containerClassName="rounded-full w-11 h-11 inline-flex items-center justify-center text-gray-900 dark:text-gray-300 border-2 border-gray-200 text-2xl"
    >
      <span className="sr-only">Open menu</span>
      <i className="las la-bars"></i>
    </ButtonOpenModal>
  );
}

export default BtnOpenMenu;
