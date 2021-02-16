import { _getTagNameRd } from "contains/fakeData";
import React, { FC } from "react";

export interface TagBadgeProps {
  containerClassName?: string;
}

const TagBadge: FC<TagBadgeProps> = ({ containerClassName = "" }) => {
  return (
    <a
      href="/archive"
      className={`inline-block px-3.5 py-2 text-gray-900 bg-gray-300 text-sm font-medium rounded-1.5xl ${containerClassName}`}
    >
      {_getTagNameRd()}
    </a>
  );
};

export default TagBadge;
