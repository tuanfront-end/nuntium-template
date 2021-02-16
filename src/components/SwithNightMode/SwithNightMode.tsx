import React from "react";

function SwithNightMode() {
  return (
    <button
      data-switch-night-mode="default"
      tabIndex={0}
      className="ttnc-switch-night-mode flex items-center rounded-full border-2 border-primary p-3px flex-row dark:flex-row-reverse focus:outline-none focus:ring-1 focus:ring-primary"
    >
      <span className="sr-only">Enable dark mode</span>
      <span className="bg-primary rounded-full w-6 h-6"></span>
      <span className="text-gray-900 dark:text-gray-200 px-2 text-paragraph-base font-bold flex items-center justify-center">
        <i className="lar la-sun dark:hidden"></i>
        <i className="lar la-moon hidden dark:block"></i>
      </span>
    </button>
  );
}

export default SwithNightMode;
