import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const fontOptions = [
  { label: "Inter", value: "Inter" },
  { label: "Comic Sans", value: '"Comic Sans MS", "Comic Sans"' },
  { label: "Serif", value: "serif" },
  { label: "Monospace", value: "monospace" },
  { label: "Cursive", value: "cursive" },
];

const FontDropdown = ({ editor }) => {
  const [selected, setSelected] = useState(fontOptions[0]);

  const applyFont = (option) => {
    setSelected(option);
    if (option.value) {
      editor.chain().focus().setFontFamily(option.value).run();
    } else {
      editor.chain().focus().unsetFontFamily().run();
    }
  };

  return (
    <Listbox value={selected} onChange={applyFont}>
      <div className="relative w-30">
        <ListboxButton className="border rounded-md p-1 flex justify-between w-full items-center z-50">
          {selected.label}
          <ChevronUpDownIcon className="w-5 h-5 ml-2 text-gray-500" />
        </ListboxButton>
        <ListboxOptions className="absolute z-10 w-full mt-1 bg-white shadow-md rounded-md overflow-hidden">
          {fontOptions.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className={`p-2 cursor-pointer hover:bg-gray-200 flex justify-between ${
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

export default FontDropdown;
