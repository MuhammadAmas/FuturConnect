import React, { useState } from 'react';

const LayoutType: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState<'list' | 'card'>('list');

  return (
    <div className="flex items-center w-15 h-10 bg-white rounded-lg overflow-hidden border">
      <div
        onClick={() => setActiveLayout('list')}
        className={`flex-1 flex justify-center items-center p-2 cursor-pointer h-10 ${
          activeLayout === 'list' ? 'bg-primaryblue' : 'bg-white'
        }`}
      >
        <img
          src="/list-layout-icon.png"
          alt="List Layout"
          className="w-3 h-auto m-0"
        />
      </div>
      <div
        onClick={() => setActiveLayout('card')}
        className={`flex-1 flex justify-center items-center p-2 cursor-pointer h-10 ${
          activeLayout === 'card' ? 'bg-primaryblue' : 'bg-white'
        }`}
      >
        <img
          src="/card-layout-icon.png"
          alt="Card Layout"
          className="w-3 h-auto"
        />
      </div>
    </div>
  );
};

export default LayoutType;
