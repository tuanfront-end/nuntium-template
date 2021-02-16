import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Checkbox from "components/Checkbox/Checkbox";
import Input from "components/Input/Input";
import LoginSocials from "components/LoginSocials/LoginSocials";
import ButtonOpenModal from "components/Modal/ButtonOpenModal";
import React, { FC } from "react";

export interface FormSignInProps {}

const FormSignIn: FC<FormSignInProps> = () => {
  return (
    <div className="bg-white rounded-2.5xl divide-y divide-gray-300 md:max-w-sm text-xs md:text-base text-gray-700">
      <header className="flex items-center justify-between px-5 py-3 space-x-3 overflow-hidden">
        <h4 className="truncate">Sign in</h4>
        <ButtonClose
          isButtonCloseModal
          modalId="wil-modal-form-sign-in"
          textColor="text-gray-900"
          containerClassName="p-2 rounded-full hover:bg-gray-200 transition"
        />
      </header>
      <div className="p-5 space-y-5">
        <Input
          placeholder="Username or email"
          nodeIcon={
            <div className="text-1.375rem text-gray-700 px-4 leading-none">
              <i className="las la-user"></i>
            </div>
          }
        />
        <Input
          placeholder="Password"
          nodeIcon={
            <div className="text-1.375rem text-gray-700 px-4 leading-none">
              <i className="las la-lock"></i>
            </div>
          }
        />

        <div className="flex items-center justify-between space-x-2">
          <Checkbox label="Remember" />
          <ButtonOpenModal
            modalId="wil-modal-form-forgot-password"
            modalIdClosed="wil-modal-form-sign-in"
            containerClassName="hover:text-gray-900 hover:underline"
          >
            Forgot password?
          </ButtonOpenModal>
        </div>
        <Button bgColor="bg-primary" textColor="text-gray-900">
          Sign in
        </Button>
        <div className="text-center">
          <span>Or sign in with social</span>
        </div>
        <div>
          <LoginSocials />
        </div>
        <div className="text-center text-gray-800">
          <span>I'm a new user. </span>
          <ButtonOpenModal
            modalId="wil-modal-form-sign-up"
            containerClassName="underline hover:font-bold text-quateary"
            modalIdClosed="wil-modal-form-sign-in"
          >
            Sign up
          </ButtonOpenModal>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
