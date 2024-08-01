import Link from "next/link";
import MainTable from "./MainTable";
import ShowStartups from "./ShowStartups";

export default async function GET() {
  try {
    const res = await fetch("http://localhost:8080/api/fetchData", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'no-store', // Ensure no caching
    });
    
 
    const data = await res.json();
    console.log("Fetched data data is" + data); // Debugging log

    return (
    <div class = "border border-gray-600">
      <ShowStartups/>
    <MainTable data={data} /></div>);
  } catch (error) {
    console.error("Error fetching data:", error);
    // return <div>Error fetching data</div>;
  }
  
  }
