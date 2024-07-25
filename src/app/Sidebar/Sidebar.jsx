import Link from "next/link";

export default function Sidebar()
{
    return(
        <div className="flex-1 max-w-[275px] flex flex-col gap-y-10 px-5 pt-[30px] bg-white border-r border-faas-border ">
      <div className="">
        <Link href="/">
          <h1 className="text-text-1 text-[32px] font-bold cursor-pointer">
            Faas
          </h1>
        </Link>
      </div>
      <div className="flex flex-col flex-1 gap-y-3">
        
    </div>
    </div>
    );
}