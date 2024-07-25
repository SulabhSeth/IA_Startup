import Link from "next/link";
import TableDisplay from "./TableDisplay";
import { startUpDetails } from "@/app/data";

export default function Table() {
  return (
    <div class="">
      <div class="max-w-5xl bg-white shadow-lg rounded-sm border border-gray-200 ml-80">
        <header class="px-5 py-4 border-b border-gray-100 flex space-x-64 ">
          <h2 class="font-semibold text-gray-800 text-3xl ">Startups</h2>
          <Link href = "/Sidebar/Table/StartupDetail/AddStartup">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            + Add Startup
          </button></Link>
        </header>

        <div class="">
          <section class="antialiased bg-gray-100 text-gray-600 h-screen w-full ">
            {/* <div class="flex flex-col justify-center h-full"> */}

            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Email</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Worth</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    {startUpDetails.map((details) => (
                      <TableDisplay {...details} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
