import React, { useState } from 'react';

const OutlineButton = ({ value, options = [], width="min-w-[120px] md:min-w-[130px]", borderStyle="border-solid", handleAddMetric}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(value || options[0] || 'Select an option');
  const [border, setBorder] = useState(borderStyle);
  const [containerWidth, setContainerWidth] = useState(width)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setContainerWidth("min-w-[120px] md:min-w-[130px]"); // Reset width on selection
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setBorder(""); // Reset border style on selection
    setContainerWidth("min-w-[120px] md:min-w-[130px]"); 
    setBorder("border-solid")// Reset width on selection
    setIsOpen(false); // Close dropdown after selection
    handleAddMetric(item); // Call the function passed as prop
  };

  return (
    <div className={`relative ${containerWidth} h-6 flex justify-center items-center`}>
        <div className={`absolute top-0 left-0 right-0 z-20 border bg-black border-customBorder ${isOpen ? "rounded-lg" : `rounded-full ${border}`} p-1`}>
        {/* Button */}
        <button
            onClick={toggleDropdown}
            className="text-xs md:text-sm px-3 rounded-full min-w-full flex justify-between items-center"
        >
            {activeItem}
            {border == "border-solid" && (
                <span>
                <img
                    src="/arrow_down.svg"
                    alt="arrow_down_button_icon"
                    className="w-2 h-2 object-cover"
                />
                </span>
            )}
        </button>
            {/* Dropdown */}
            {/* absolute left-0 */}
            {isOpen && (
                <ul className="border-t border-customBorder mt-1 pb-2">
                {options.map((item, index) => (
                    <li
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className={`px-4 py-2 text-xs text-white cursor-pointer hover:bg-dropdown ${
                        activeItem === item ? 'bg-dropdown' : ''
                    }`}
                    >
                    {item}
                    </li>
                ))}
                </ul>
            )}
        </div>
    </div>
  );
};

export default OutlineButton;