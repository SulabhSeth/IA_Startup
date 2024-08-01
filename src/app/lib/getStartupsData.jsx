// src/app/collection/CollectionClientComponent.js
"use client";

import TableDisplay from "../Sidebar/Table/TableDisplay";

export default function CollectionComponent({ data }) {
  return (
    <div className="h-96 ml-72 mt-44">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((details) => (
            <TableDisplay key={details.id} {...details} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
