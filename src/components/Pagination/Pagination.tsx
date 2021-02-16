import React, { FC } from "react";

export interface PaginationProps {
  containerClassName?: string;
}

const Pagination: FC<PaginationProps> = ({ containerClassName = "" }) => {
  return (
    <div
      className={`wil-pagination flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-medium text-lg space-x-3 ${containerClassName}`}
    >
      <a
        href="#root"
        className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center rounded-full text-2xl"
      >
        <span className="sr-only">Next</span>
        <i className="las la-angle-left"></i>
      </a>
      <a
        href="#root"
        className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center rounded-full"
      >
        1
      </a>
      <a
        href="#root"
        className="wil-pagination--active w-12 h-12 text-neutral-900 bg-primary flex items-center justify-center rounded-full border"
      >
        2
      </a>
      <a
        href="#root"
        className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center rounded-full"
      >
        3
      </a>
      <a
        href="#root"
        className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center rounded-full"
      >
        ...
      </a>
      <a
        href="#root"
        className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center rounded-full text-2xl"
      >
        <span className="sr-only">Next</span>
        <i className="las la-angle-right"></i>
      </a>
    </div>
  );
};

export default Pagination;
