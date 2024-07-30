// src/components/ProfileCard.jsx
import React, { useState } from 'react';

const ServiceAuth = ({ imageSrc, title, subtitle, buttonImageSrc, popupContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className=" h-14 flex items-center p-[10px] bg-[#F7F7F8] rounded-lg border-2">
      <img
        src={imageSrc}
        alt="Profile"
        className="w-9 h-9 rounded-md object-cover"
      />
      <div className="ml-4">
        <h2 className="text-xs font-semibold">{title}</h2>
        <p className="text-gray-600 text-[10px]">{subtitle}</p>
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-auto w-9 h-9 border-[#E4E4E4] border-2 rounded-md flex items-center justify-center"
      >
        <img
          src={buttonImageSrc}
          alt="Button"
          className="w-4 h-4"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Pop-up Content</h2>
            <p>{popupContent}</p>
            <button
              onClick={handleClose}
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceAuth;
