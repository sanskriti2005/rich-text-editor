import React from "react";

const UnderlineBtn = ({ editor }) => {
  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={` border rounded-md p-1 flex items-center  ${
          editor.isActive("underline")
            ? "bg-gray-200"
            : "border-black-400 text-black"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default UnderlineBtn;
