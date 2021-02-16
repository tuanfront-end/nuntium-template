import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Logo from "components/Logo/Logo";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemType } from "./Navigation";

export interface NavMobileProps {
  modalId: string;
  data: NavItemType[];
}

const NavMobile: React.FC<NavMobileProps> = ({ modalId, data }) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <div
        className="nav-mobile-sub-menu hidden px-3 z-50 w-60"
        id={"ttnc-" + item.link + item.id}
      >
        {item.children?.map((i, index) => (
          <div
            key={i.link + index}
            className="capitalize text-gray-800 dark:text-gray-200"
          >
            <NavLink
              exact
              strict
              to={i.link}
              className="block px-4 py-2 text-link-medium"
              data-ttnc-hidden-toggle={
                i.children ? "ttnc-" + i.link + i.id : undefined
              }
              activeClassName="text-primary"
            >
              {i.name}
              {i.children && <i className="ml-1 las la-angle-down"></i>}
            </NavLink>
            {i.children && _renderMenuChild(i)}
          </div>
        ))}
      </div>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <div key={item.link + index} className="text-gray-900 dark:text-white">
        <NavLink
          exact
          strict
          className={`inline-flex items-center py-2 px-4 text-link-medium font-semibold uppercase`}
          to={item.link}
          data-ttnc-hidden-toggle={"ttnc-" + item.link + item.id}
          activeClassName="text-primary"
        >
          {item.name}
          {item.children && <i className="ml-1 mb-1 las la-angle-down"></i>}
        </NavLink>
        {item.children && _renderMenuChild(item)}
      </div>
    );
  };

  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
      <div className="shadow-lg ring-1 ring-black ring-opacity-20 bg-white dark:bg-gray-800 divide-y-2 divide-gray-100">
        <div className="py-6 px-5 flex items-start justify-between">
          <Logo />
          <ButtonClose
            containerClassName="text-black dark:text-white"
            modalToggleId={modalId}
          />
        </div>
        <nav className="flex flex-col items-start py-6 px-5 space-y-2">
          {data.map(_renderItem)}
        </nav>
        <div className="flex items-center justify-between py-6 px-5 space-x-4">
          <Button size="small">Get Template</Button>
          <SwithNightMode />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
