import { startUpDetails } from "@/app/data";
import Tabs from "@/app/Sidebar/Table/StartupDetail/Tabs";

export default function IndividualStartup({ params }) {
  const company = { startUpDetails };

  const companyDetail = company.startUpDetails.find(
    (obj) => obj.slug === params.someslug
  );

  return (
    <div>
      <Tabs {...companyDetail} />
    </div>
  );
}
