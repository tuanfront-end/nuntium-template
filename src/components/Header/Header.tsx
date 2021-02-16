import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import Logo from "components/Logo/Logo";
import Navigation, { NAV_DATA } from "components/Navigation/Navigation";
import NavMobile from "components/Navigation/NavMobile";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";
export const NAV_MOBILE_ID = "ttnc-nav-mobbile";
const USER_MENU_ID = "ttnc-nav-user-menu";

export default function Header() {
  const _renderUserMenu = () => {
    return (
      <div className="flex flex-col">
        <a
          href="#root"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Your Profile
        </a>
        <a
          href="#root"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </a>
        <a
          href="#root"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </a>
      </div>
    );
  };

  return (
    <div className="ttnc-Header bg-white dark:bg-gray-800 md:border-b border-gray-200 dark:border-gray-700">
      <nav className="container ">
        <div className="container">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                data-ttnc-modal-toggle={NAV_MOBILE_ID}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                <i className="las la-bars"></i>
              </button>
              <div
                className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
                id={NAV_MOBILE_ID}
              >
                <NavMobile data={NAV_DATA} modalId={NAV_MOBILE_ID} />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <Navigation />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <i className="las la-bell"></i>
              </button>

              <div className="ml-3 relative">
                <Dropdown>
                  <DropdownTrigger>
                    <div className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <Avatar sizeClass="h-8 w-8" />
                    </div>
                  </DropdownTrigger>
                  <DropdownPanel popperPlacement="bottom-end">
                    {_renderUserMenu()}
                  </DropdownPanel>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
