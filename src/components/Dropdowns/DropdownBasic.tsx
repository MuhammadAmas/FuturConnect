import React, { useState } from 'react';

interface DropdownBasicProps {
  buttonText: string;
  menuItems: { title: string; value: string }[];
}

const DropdownBasic: React.FC<DropdownBasicProps> = ({
  buttonText,
  menuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-lowemphasize bg-transparent border font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white"
        type="button"
      >
        {buttonText}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        id="dropdown"
        className={`absolute z-10 mt-0 bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.value}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownBasic;
