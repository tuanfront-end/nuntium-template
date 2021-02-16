import { _getPersonNameRd, _getAvatarRd } from "contains/fakeData";
import React, { FC } from "react";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
}

const Avatar: FC<AvatarProps> = ({
  containerClassName = "ring-2 ring-white",
  sizeClass = "h-6 w-6",
  radius = "rounded-full",
  imgUrl = "",
}) => {
  const url = imgUrl || _getAvatarRd();
  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-gray-100 uppercase font-bold bg-gray-200 ${radius} ${sizeClass} ${containerClassName} ${
        !url ? "wil-avatar-no-img" : ""
      }`}
    >
      {url && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={url}
          alt=""
        />
      )}
      <span className="wil-avatar__name">{_getPersonNameRd()[0]}</span>
    </div>
  );
};

export default Avatar;
