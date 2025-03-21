import React from "react";
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
      class: 'mention',
    },
    suggestion,
  }),
];

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
      <div className="flex w-[60%] justify-evenly p-6 m-[auto] h-[80px] align-center">
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
