import { BsSearch } from "react-icons/bs";
import { Analysis } from "../../Components/Analysis";

const StudentPerformance = () => {
  return (
    <main>
      <div className="lg:p-8 p-4 africanart relative lg:h-96 flex justify-center flex-col">
        <div className="text-center lg:my-0 my-8">
          <div className="relative lg:w-[724px] mx-auto ">
            <BsSearch
              size={20}
              className="absolute lg:left-3 left-5 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search subject"
              className="w-full rounded-2xl bg-white text-black py-3 pl-10 pr-4 placeholder-custom"
            />
          </div>
        </div>
      </div>
      <Analysis />
    </main>
  );
};

export default StudentPerformance;
