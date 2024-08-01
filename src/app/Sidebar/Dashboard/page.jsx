import BarChart from "@/app/Charts/BarChart";
import ChartPie from "@/app/Charts/ChartPie";

export default function Dashboard() {
  return (
    <div class="p-1">
      <div className="ml-40">
        <div className="flex items-center h-10"></div>

        <div className="flex items-center bg-slate-50 mt-12 ml-24 ">
          <img className="ml-2 object-left-top" src="" />
          <span className="float-left indent-1">Holdings (9 Startups) </span>
        </div>

        <div className="flex  h-24 bg-slate-50 ml-24">
          <div className="flex flex-col basis-1/4  shadow-2xl h-auto border rounded-3xl border-gray-300  ">
            <span className="text-gray-400 text-sm bg-slate-50 float-start mt-6 ml-8 ">
              Total Investement
            </span>
            <span className="font-semibold text-4xl ml-8">&#8377;20.97</span>
          </div>

          <div className="flex flex-col basis-1/4 w-36 shadow-2xl h-auto border rounded-3xl border-gray-300">
            <span className="text-gray-400 text-sm bg-slate-50 float-start mt-6 ml-16 ">
              Current Value
            </span>
            <span className="font-semibold text-4xl ml-12">&#8377;20.97</span>
          </div>

          <div className="flex flex-col basis-1/4 w-36 shadow-2xl h-auto border rounded-3xl border-gray-300">
            <span className="text-gray-400 text-sm bg-slate-50 float-start mt-6 ml-16">
              Unrealised Total P&L
            </span>
            <span className="font-semibold text-4xl text-red-600 ml-12">
              &#8377;20.97
            </span>
          </div>

          <div className="flex flex-col basis-1/4 w-36 shadow-2xl h-auto border rounded-3xl border-gray-300">
            <span className="text-gray-400 text-sm bg-slate-50 float-start mt-6 ml-16 ">
              Return on Investment
            </span>
            <span className="font-semibold text-4xl text-green-600 ml-16">
              20.97
            </span>
          </div>
        </div>

        <div className="flex h-24 bg-slate-50 ml-24">
          <p class=" font-serif  ml-80 mt-6 ">View by :-</p>
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold h-8 hover:border-transparent 
                rounded ml-4 mt-4 border border-blue-500 py-2 px-4 hover:text-white justify-center"
          >
            Current Value
          </button>

          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold h-8 hover:border-transparent 
                rounded ml-4 mt-4 border border-blue-500 py-2 px-4 hover:text-white justify-center"
          >
            Amount Invested
          </button>

          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold h-8 hover:border-transparent 
                rounded ml-4 mt-4 border border-blue-500 py-2 px-4 hover:text-white justify-center"
          >
            P & L
          </button>
        </div>
      </div>

      <div class="flex ml-64 justify-evenly p-2">
        <div class="w-64 flex-1 ">
          <ChartPie />
        </div>
        <div class="w-24  flex-1 shadow-2xl h-auto border rounded-3xl border-gray-300 ml-2">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
