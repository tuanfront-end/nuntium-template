import React, { FC } from "react";

export interface NextPrevProps {
  btnClass?: string;
}

const NextPrev: FC<NextPrevProps> = ({ btnClass = "" }) => {
  return (
    <div
      className="inline-flex items-center text-white text-xl space-x-4"
      data-glide-el="controls"
    >
      <button
        className={`${btnClass}-prev flex items-center justify-center h-11 w-11 rounded-full bg-primary`}
        data-glide-dir="<"
      >
        <i className="las la-long-arrow-alt-left"></i>
      </button>
      <button
        className={`${btnClass}-next flex items-center justify-center h-11 w-11 rounded-full bg-primary `}
        data-glide-dir=">"
      >
        <i className="las la-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default NextPrev;
