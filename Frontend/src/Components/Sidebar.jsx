import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white shadow-md h-full p-4 border-r w-1/7">
      <h2 className="text-xl font-semibold mb-4">FlowStock</h2>
      <ul className="space-y-3">
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Dashboard</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Orders</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Customers</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Payments</li>
      </ul>
    </div>
  );
}

export default Sidebar;
