import React, { FC } from "react";

export interface FooterWidgetNavProps {}

const FooterWidgetNav: FC<FooterWidgetNavProps> = () => {
  return (
    <ul className="space-y-4 text-gray-500">
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="/docs/installation"
        >
          Term of use
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="https://blog.tailwindcss.com/tailwindcss-v2"
        >
          Release Notes
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="/docs/upgrading-to-v2"
        >
          Upgrade Guide
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="/docs/upgrading-to-v2"
        >
          Travel
        </a>
      </li>
    </ul>
  );
};

export default FooterWidgetNav;
