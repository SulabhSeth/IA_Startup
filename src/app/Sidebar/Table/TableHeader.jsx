const TableHeader = () => {
    return (
      <thead class = "">
        <tr class = "border border-black">
          <th className="px-6 py-3 text-left text-pretty font-bold text-gray-700 uppercase tracking-wider">
            Startup Name
          </th>
          <th className="px-2 py-3 text-left text-pretty font-bold text-gray-700 uppercase tracking-wider">
            City
          </th>
          <th className="px-2 py-3 text-left text-pretty font-bold text-gray-700 uppercase tracking-wider">
            Category
          </th>
          <th className="px-2 py-3 text-pretty font-bold text-gray-700 uppercase tracking-wider">
            State
          </th>
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;
  