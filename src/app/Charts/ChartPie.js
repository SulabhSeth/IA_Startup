import PieChart from "./Doughnut";

export default function ChartPie()
{
    return(
        <div className=' shadow-2xl w-1/2 h-auto border rounded-3xl border-gray-300'>  
      <p className='text-left font-bold text-xl ml-4 mt-3'>Current Value of Holdings - Stage Wise</p>
      <div className='h-80 object-center ml-20  '>
        <PieChart/>
      </div>
      <div>
        
      </div>
      </div>
    );
}