import BarChart from "@/app/Charts/BarChart";
import ChartPie from "@/app/Charts/ChartPie";


export default function Dashboard() {
  return (
    <div class = "">
      <div class = "h-24 bg-white"></div>
      <div class=" mt-24 ml-96 ">
        <ChartPie/>
      </div>
      <div class="ml-96 h-72">
        <BarChart />
      </div>
      
    </div>
  );
}
