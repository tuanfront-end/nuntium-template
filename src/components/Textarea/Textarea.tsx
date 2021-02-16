import React from "react";
export interface TextareaProps {
  name: string;
  label?: string;
  desc?: string;
  placeholder?: string;
}
const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  desc,
  placeholder,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-paragraph-small text-black dark:text-white mb-2 ml-4"
        >
          {label}
        </label>
      )}
      <div className="">
        <textarea
          id={name}
          name={name}
          rows={4}
          className="shadow-sm focus:ring-action-primary focus:border-primary mt-1 block w-full sm:text-sm border-action-primary"
          placeholder={placeholder}
        ></textarea>
      </div>
      {desc && <p className="mt-2 text-sm text-neutral-500">{desc}</p>}
    </div>
  );
};

export default Textarea;
