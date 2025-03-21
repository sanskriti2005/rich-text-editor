import React from "react";

const HiglightBtn = ({ editor }) => {
  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={` border rounded-md p-1 flex items-center  ${
          editor.isActive("highlight")
            ? "bg-gray-200"
            : "border-black-400 text-black"
        }`}
      >
        <span className="bg-black text-white px-2 py-1 rounded-2xl">A</span>
      </button>
    </div>
  );
};

export default HiglightBtn;
