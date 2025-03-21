import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const headingOptions = [
  { label: "Paragraph", value: "paragraph" },
  { label: "Heading 1", value: "heading-1", level: 1 },
  { label: "Heading 2", value: "heading-2", level: 2 },
];

const HeadingDropdown = ({ editor }) => {
  const [selected, setSelected] = useState(headingOptions[0]);

  const applyFormat = (option) => {
    setSelected(option);
    if (option.value === "paragraph") {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level: option.level }).run();
    }
  };

  return (
    <Listbox value={selected} onChange={applyFormat}>
      <div className="relative">
        <ListboxButton className="border rounded-md p-1 flex items-center">
          {selected.label}
          <ChevronUpDownIcon className="w-5 h-5 ml-2" />
        </ListboxButton>
        <ListboxOptions className="absolute bg-white shadow-md rounded-md mt-1">
          {headingOptions.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className={`p-2 hover:bg-gray-200 cursor-pointer ${
                selected.value === option.value ? "bg-gray-300 font-bold" : ""
              }`}
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default HeadingDropdown;
