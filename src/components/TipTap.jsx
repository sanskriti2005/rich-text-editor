import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Italic from "@tiptap/extension-italic";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import BoldBtn from "./BoldBtn";
import HeadingDropdown from "./HeadingDropdown";
import ItalicBtn from "./ItalicBtn";
import StrikeThroughBtn from "./StrikeThroughBtn";

const extensions = [StarterKit];

const content = ``;

const TipTap = () => {
  const editor = useEditor({
    extensions,
    content,
  });
  if (!editor) {
    return null;
  }
  return (
    <div>
      <div className="flex w-[100%] justify-evenly p-4">
        {/* Heading Dropdown */}
        <HeadingDropdown editor={editor}/>

        {/* Bold */}
        <BoldBtn editor={editor}/>


        {/* Italic */}
        <ItalicBtn editor={editor}/>


        {/* Strike */}
        <StrikeThroughBtn editor={editor}/>

        {/* Code */}
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          Code
        </button>

        {/* Code block */}
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          Code block
        </button>

        {/* Paragraph */}
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </button>

        {/* Heading */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </button>
      </div>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTap;
