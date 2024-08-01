import TableHeader from './TableHeader';
import TableDisplay from './TableDisplay';

const MainTable = ({ data }) => {
    console.log(data)
  return (
    <div class = "mr-64">
      <table className="ml-64 w-full divide-y divide-gray-200 border border-gray-600 shadow-md">
        <TableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((details) => (
            <TableDisplay key={details.id} {...details} />
          ))}
        </tbody>
      </table></div>
    
  );
};

export default MainTable;
