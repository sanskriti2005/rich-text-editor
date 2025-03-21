import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const alignmentOptions = [
  {
    label: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    ),
    value: "left",
  },
  {
    label: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    ),
    value: "right",
  },
  {
    label: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    ),
    value: "center",
  },
];

const TextAlignDropdown = ({editor}) => {
  const [selected, setSelected] = useState(alignmentOptions[0]);

  const applyFormat = (option) => {
    setSelected(option);
    if (option.value) {
      editor.chain().focus().setTextAlign(option.value).run();
    } else {
      editor.chain().focus().unsetTextAlign().run();
    }
  };
  return (
    <Listbox value={selected} onChange={applyFormat}>
      <div className="relative">
        <ListboxButton className="border rounded-md p-1 flex items-center">
          {selected.label}
          <ChevronUpDownIcon className="w-5 h-5 ml-2" />
        </ListboxButton>
        <ListboxOptions className="absolute bg-white shadow-md rounded-md mt-1 z-50">
          {alignmentOptions.map((option) => (
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

export default TextAlignDropdown;
