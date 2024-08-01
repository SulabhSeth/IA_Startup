import Link from "next/link";

export default function ShowStartups() {
  return (
    <div class="">
      <div class=" bg-white shadow-lg rounded-sm border border-gray-200 ml-60">
        <header class="px-5 py-4 border-b border-gray-100 flex space-x-64 ">
          <h2 class="font-extrabold text-gray-800 text-3xl ">Startups</h2>
          <Link href="/Sidebar/Table/StartupDetail/AddStartup">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              + Add Startup
            </button>
          </Link>
        </header>

        
      </div>
    </div>
  );
}
