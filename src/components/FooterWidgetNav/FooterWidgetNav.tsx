import React from "react";

export interface FooterWidgetNavProps {
  dataIndex?: number;
}

const FooterWidgetNav: React.FC<FooterWidgetNavProps> = ({ dataIndex = 0 }) => {
  const data = [
    ["Our Story", "Our Mission", "Our Team", "Contact Us"],
    ["Volunteer", "Events", "Partners", "Careers"],
    ["Blog", "Careers", "Donate"],
  ];
  const title = ["About Us", "Get Involved", "Warmbeat"];

  const _renderItem = (item: string) => {
    return (
      <li key={item}>
        <a
          href="#root"
          className="inline-block py-2 capitalize hover:text-primary"
        >
          {item}
        </a>
      </li>
    );
  };
  return (
    <div>
      <h2 className="uppercase text-gray-900 dark:text-gray-100 font-semibold mb-1">
        {title[dataIndex]}
      </h2>
      <ul className="text-gray-800 dark:text-gray-200 font-normal">
        {data[dataIndex].map((item) => _renderItem(item))}
      </ul>
    </div>
  );
};

export default FooterWidgetNav;
