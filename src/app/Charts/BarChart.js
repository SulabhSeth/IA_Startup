"use client";
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


const BarChart = () => {
const option={
    indexAxis:'y',
    elements:{
      bar:{
        borderWidth:1,
      }
    },
    responsive:true,
    plugins:{
      legend:{
        position:'top'
      },
      title:{
        display:true,
        text:' Return on Investement - Startup Wise'
      }
    }
  };
  const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
        label: "Amount Invested",
        data: [ 20, 30, 40, 50, 60,70],
        backgroundColor: "green",
    },
    {
        label:'Unrealised P&L',
        data: [15,20,25,40,45,60],
        backgroundColor:'blue'
    },
  
  
          ],
  
  
  };
  return <Bar options={option} data={data} />;
};
export default BarChart;