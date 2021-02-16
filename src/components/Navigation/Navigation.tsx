import Button from "components/Button/Button";
import { NAV_MOBILE_ID } from "components/Header/Header";
import React from "react";
import { NavLink } from "react-router-dom";
import NavMobile from "./NavMobile";

export interface NavItemType {
  id: number;
  name: string;
  // link: keyof LocationStates | "#";
  link: string;
  children?: NavItemType[];
  isActive?: boolean;
}
const DATABASE: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    // isActive: true,
    children: [
      { id: 3, name: "Home 1", link: "/" },
      { id: 2, name: "Home 2", link: "/home2" },
    ],
  },

  {
    id: 11,
    name: "About us",
    link: "/our-story",
    children: [
      { id: 12, name: "Our story", link: "/our-story" },
      { id: 13, name: "Our mission", link: "/our-mission" },
      { id: 14, name: "Our Team", link: "/our-team" },
      { id: 15, name: "Contact Us", link: "/contact" },
    ],
  },
  {
    id: 16,
    name: "Getinvolved",
    link: "/volunteer",
    children: [
      { id: 17, name: "Volunteer", link: "/volunteer" },
      { id: 18, name: "Events", link: "/events" },
      { id: 19, name: "Programs", link: "/programs" },
      { id: 20, name: "Careers", link: "/careers" },
    ],
  },
];
export const NAV_DATA: NavItemType[] = DATABASE;

function Navigation() {
  const _renderMenuChild = (item: NavItemType, className = "top-full") => {
    return (
      <div className={`sub-menu absolute py-3 px-2 z-50 w-60 ${className}`}>
        <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1">
          {item.children?.map((i, index) => (
            <div
              key={i.link + index}
              className="relative menu-item-has-children text-gray-800"
            >
              <NavLink
                exact
                strict
                to={i.link}
                className="block px-4 py-3 hover:bg-gray-100"
                activeClassName="text-primary"
              >
                {i.name}
                {i.children && (
                  <i className="ml-1 font-bold las la-angle-down"></i>
                )}
              </NavLink>
              {i.children && _renderMenuChild(i, "left-full -top-4")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <div
        key={String(index) + item.link}
        className="relative menu-item-has-children text-gray-900 dark:text-white hover:text-primary"
      >
        <NavLink
          exact
          strict
          className=""
          to={item.link}
          activeClassName="text-primary"
        >
          {item.name}
          {item.children && (
            <i className="ml-1 mb-1 font-bold las la-angle-down"></i>
          )}
        </NavLink>
        {item.children && _renderMenuChild(item)}
      </div>
    );
  };

  return <div className="flex space-x-4">{NAV_DATA.map(_renderItem)}</div>;
}

export default Navigation;
