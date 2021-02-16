import React from "react";

function SwithNightMode() {
  return (
    <div>
      <button
        id="wil-switch-night-mode"
        tabIndex={0}
        className="flex items-center rounded-full border-2 border-gray-200 py-1 px-1 flex-row dark:flex-row-reverse focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="sr-only">Enable dark mode</span>
        <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-xl text-gray-900">
          <i id="wil-switch-night-mode-icon" className="lar"></i>
        </span>
        <span
          id="wil-switch-night-mode-text"
          className="text-gray-900 dark:text-gray-200 px-2 text-base"
        >
          Dark
        </span>
      </button>
    </div>
  );
}

export default SwithNightMode;
