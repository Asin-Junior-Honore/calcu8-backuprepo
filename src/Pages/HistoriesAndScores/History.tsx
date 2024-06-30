import { BsSearch } from "react-icons/bs";
import HistoryScorecard from "../../Components/HistoryCard";
import Navbar from "../../Components/Navbar";

const History = () => {
  return (
    <main>
      <section className="p-4 lg:py-4 lg:px-8">
        <Navbar />
        {/* write logic to display the navbar if user is authenticated or login */}
      </section>
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

      <HistoryScorecard />
    </main>
  );
};

export default History;
