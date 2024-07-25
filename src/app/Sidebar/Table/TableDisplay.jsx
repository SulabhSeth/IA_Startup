import Link from "next/link";

export default function TableDisplay({ Name, Email, Worth, Country, slug }) {
  return (
    <tr>
      <td class="p-2 whitespace-nowrap">
        <div class="flex items-center">
          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              class="rounded-full"
              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
              width="40"
              height="40"
              alt="Alex Shatov"
            />
          </div>

          <Link href={`/startups/${slug}`}>
            <div class="font-medium text-gray-800">{Name}</div>
          </Link>
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left">{Email}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left font-medium text-green-500">{Worth}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center">{Country}</div>
      </td>
    </tr>
  );
}
