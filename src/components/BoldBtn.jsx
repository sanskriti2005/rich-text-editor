import React from "react";

const BoldBtn = ({editor}) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().focus().toggleBold().run()}
      className={`border rounded-md p-1 flex items-center 
            ${
              editor.isActive("bold")
                ? "border-black-600 text-black"
                : "border-black-400 text-black"
            } `}
    >
      <strong>B</strong>
    </button>
  );
};

export default BoldBtn;
