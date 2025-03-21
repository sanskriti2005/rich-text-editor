import React, { useContext, useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

import BoldBtn from "./BoldBtn";
import HeadingDropdown from "./HeadingDropdown";
import ItalicBtn from "./ItalicBtn";
import StrikeThroughBtn from "./StrikeThroughBtn";
import FontDropdown from "./FontDropdown";
import UnderlineBtn from "./UnderlineBtn";
import HiglightBtn from "./HiglightBtn";
import TextAlignDropdown from "./TextAlignDropdown";
import UnorderedListBtn from "./UnorderedListBtn";
import OrderedListBtn from "./OrderedListBtn";
import suggestion from "./suggestion";
import Mention from "@tiptap/extension-mention";
import { VarContext } from "../contexts/VarContextProvider";

const extensions = [
  StarterKit,
  TextStyle,
  FontFamily,
  Underline,
  Highlight,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right"],
  }),
  Mention.configure({
    HTMLAttributes: {
      class: "mention",
    },
    suggestion,
  }),
];

const content = ``;

const TipTap = () => {
  const [editorContent, setEditorContent] = useState(null);
  const { value } = useContext(VarContext);
  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getText()); 
    },
    
  });

  if (!editor) {
    return null;
  }

  useEffect(() => {
    console.log(editorContent)
  }, [editorContent])

  useEffect(() => {
    console.log(value, 'value')
  }, [value])

  return (
    <div>
      <div className="flex flex-wrap w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] justify-center gap-2 p-4 mx-auto h-auto items-center">
        {/* Heading Dropdown */}
        <HeadingDropdown editor={editor} />

        {/* Font Dropdown */}
        <FontDropdown editor={editor} />

        {/* Bold */}
        <BoldBtn editor={editor} />

        {/* Italic */}
        <ItalicBtn editor={editor} />

        {/* Strike */}
        <StrikeThroughBtn editor={editor} />

        {/* Underline Btn */}
        <UnderlineBtn editor={editor} />

        {/* Highlight Btn */}
        <HiglightBtn editor={editor} />

        {/* Text-align Dropdown */}
        <TextAlignDropdown editor={editor} />

        {/* Unordered list Btn */}
        <UnorderedListBtn editor={editor} />

        {/* Ordered List Btn */}
        <OrderedListBtn editor={editor} />
      </div>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTap;
