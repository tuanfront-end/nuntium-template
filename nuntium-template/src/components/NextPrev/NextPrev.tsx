import React, { FC } from "react";

export interface NextPrevProps {
  btnClass?: string;
}

const NextPrev: FC<NextPrevProps> = ({ btnClass = "" }) => {
  return (
    <div
      className="glide__arrows inline-flex items-center justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-full text-xl md:text-2xl py-2 px-4 w-24 h-9 md:h-11"
      data-glide-el="controls"
    >
      <button
        className={`${btnClass}-prev block disabled:text-gray-400`}
        data-glide-dir="<"
        disabled
      >
        <i className="las la-angle-left"></i>
      </button>
      <button
        className={`${btnClass}-next block disabled:text-gray-400`}
        data-glide-dir=">"
      >
        <i className="las la-angle-right"></i>
      </button>
    </div>
  );
};

export default NextPrev;
