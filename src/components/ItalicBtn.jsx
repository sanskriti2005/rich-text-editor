// import { ItalicIcon } from "@heroicons/react/solid";
import { ItalicIcon } from "@heroicons/react/24/solid";
import React from "react";

const ItalicBtn = ({ editor }) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={` border rounded-md p-1 flex items-center  ${
        editor.isActive("italic")
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
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
        />
      </svg>
    </button>
  );
};

export default ItalicBtn;
