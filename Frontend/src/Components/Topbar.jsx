import React from 'react';

function Topbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-3 py-2 w-1/3"
      />
      <div className="flex items-center gap-4">
        <span className="text-gray-500">01:65 PM</span>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Topbar;
