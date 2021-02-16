import React, { FC } from "react";

export interface NextPrev2Props {
  btnClass?: string;
}

const NextPrev2: FC<NextPrev2Props> = ({ btnClass = "" }) => {
  return (
    <div
      className="inline-flex items-center text-gray-900 dark:text-gray-100 text-xl md:text-2xl"
      data-glide-el="controls"
    >
      <button
        className={`${btnClass}-prev block h-11 w-11 rounded-full bg-white dark:bg-gray-900 mr-10px disabled:text-gray-400`}
        data-glide-dir="<"
        disabled
      >
        <i className="las la-angle-left"></i>
      </button>
      <button
        className={`${btnClass}-next block h-11 w-11 rounded-full bg-white dark:bg-gray-900  disabled:text-gray-400`}
        data-glide-dir=">"
      >
        <i className="las la-angle-right"></i>
      </button>
    </div>
  );
};

export default NextPrev2;
