import Link from "next/link";

const TableDisplay = ({ startup_Name, city, category, state, slug }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 sm:mr-3">
            <img
              className="rounded-full"
              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
              width="40"
              height="40"
              alt="Profile"
            />
          </div>
          <Link href={`/startups/${slug}`}>
            <div className="font-medium text-gray-800">{startup_Name}</div>
          </Link>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{city}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">{category}</div>
      </td>
      <td className="p-2 whitespace-nowrap ">
        <div className="text-lg text-center mr-12">{state}</div>
      </td>
    </tr>
  );
};

export default TableDisplay;
