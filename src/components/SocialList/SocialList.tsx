import React from "react";

export interface SocialType {
  id: number | string;
  name: string;
  icon: string;
  link: string;
}

export interface SocialListProps {
  data?: SocialType[];
  containerClass?: string;
  itemClassName?: string;
  itemSize?: string;
}

const DATA: SocialType[] = [
  { id: 1, name: "facebook", icon: "lab la-facebook-f", link: "#" },
  { id: 2, name: "youtube", icon: "lab la-youtube", link: "#" },
  { id: 3, name: "twitter", icon: "lab la-twitter", link: "#" },
];

const SocialList: React.FC<SocialListProps> = ({
  data = DATA,
  containerClass = "",
  itemSize = "lg:w-11 w-8 lg:h-11 h-8",
  itemClassName = "border-2 border-neutral-300",
}) => {
  return (
    <div className={`flex items-center flex-wrap space-x-2 ${containerClass}`}>
      {data.map((item) => {
        return (
          <a
            key={item.name + item.id}
            className={`rounded-full flex items-center justify-center text-lg ${itemSize} ${itemClassName}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </div>
  );
};

export default SocialList;
