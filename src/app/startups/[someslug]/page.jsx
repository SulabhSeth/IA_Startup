import Tabs from "@/app/Sidebar/Table/StartupDetail/Tabs";

export default async function IndividualStartup({ params }) {
  try {
    const res = await fetch("http://localhost:8080/api/fetchData", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensure no caching
    });

    const data = await res.json();
    console.log("Fetched data slug is" + params.someslug); // Debugging log
    const decodedSlug = decodeURIComponent(params.someslug)
    const companyDetail = data.find((obj) => obj.slug === decodedSlug);

    return (
      <div class= "">
        <Tabs {...companyDetail} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // return <div>Error fetching data</div>;
  }
}
