import { BsSearch } from "react-icons/bs";
import { numbers } from "../../utils/numberRange";
import Navbar from "../../Components/Navbar";

export default function Exams() {
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
      <section className="lg:p-8 p-4 pb-14">
        <div className="text-primary-black space-y-10 exam-details">
          <div className="flex items-center lg:justify-normal justify-between">
            <h3 className="lg:text-2xl text-xl">Examination</h3>
            <span className="lg:ml-24 py-2 bg-[#F3F3F380] rounded-lg lg:rounded-tr-3xl lg:rounded-br-full art  lg:pl-16  px-12 lg:pr-72 text-primary-purple text-lg lg:text-2xl font-semibold uppercase">
              wassce/gce
            </span>
          </div>
          <div className="flex items-center lg:justify-normal justify-between">
            <h3 className="lg:text-2xl text-xl">Subject</h3>
            <span className="lg:ml-[9.2rem] py-2 bg-[#F3F3F380] rounded-lg lg:rounded-tr-3xl lg:rounded-br-full art  lg:pl-16  px-12 lg:pr-60 text-primary-purple text-lg lg:text-2xl font-semibold">
              Mathematics
            </span>
          </div>
          <div className="flex items-center lg:justify-normal justify-between">
            <h3 className="lg:text-2xl text-xl">Year</h3>
            <span className="lg:ml-[11.4rem] py-2 bg-[#F3F3F380] rounded-lg lg:rounded-tr-3xl lg:rounded-br-full art  lg:pl-16  px-20 lg:pr-64 text-primary-purple text-lg lg:text-2xl font-semibold">
              2019
            </span>
          </div>
          <div className="flex items-center lg:justify-normal justify-between">
            <h3 className="lg:text-2xl text-xl">Time Left</h3>
            <span className="lg:ml-[8rem] py-2 bg-[#F3F3F380] rounded-lg lg:rounded-tr-3xl lg:rounded-br-full art  lg:pl-16  px-12 lg:pr-24 text-primary-purple text-base lg:text-2xl font-semibold">
              40 mins 50 sec
            </span>
          </div>
        </div>

        <div className="my-14  trackquestions">
          <div className="answerd-progress lg:space-y-0 space-y-8 flex justify-between lg:flex-row flex-col">
            <div className="progress lg:w-[700px]"></div>
            <span className="text-right">
              <button className="text-xl bg-primary-purple py-3 lg:px-14 px-8 rounded-xl font-semibold art">
                Submit
              </button>
            </span>
          </div>
        </div>

        <div className="questions mb-16 text-primary-black">
          <h3 className="font-medium lg:text-3xl text-2xl leading-10">
            Question 4
          </h3>
          <p className="my-8 text-primary-purple text-xl">
            The wheel of a tractor has a diameter 1.4m. What distance does it
            cover in 100 complete revolutions?
          </p>
          <div className="space-y-8">
            <button className="text-xl text-left px-10 w-full lg:px-40 py-5 lg:w-auto block rounded-lg shadow quest-hover">
              A. 140 meters
            </button>
            <button className="text-xl text-left px-10 w-full lg:px-40 py-5 lg:w-auto block rounded-lg shadow quest-hover">
              B. 440 meters
            </button>
            <button className="text-xl text-left px-10 w-full lg:px-40 py-5 lg:w-auto block rounded-lg  shadow quest-hover">
              C. 340 meters
            </button>
            <button className="text-xl text-left px-10 w-full lg:px-40 py-5 lg:w-auto block rounded-lg shadow quest-hover">
              D. 440 meters
            </button>
          </div>

          <span className="flex justify-between mt-12">
            <button className="py-3 px-10 bg-[#46daa8] rounded-xl text-lg text-white">
              Previous
            </button>
            <button className="py-3 px-10 bg-[#46daa8] rounded-xl text-lg text-white">
              Next
            </button>
          </span>
        </div>

        <div className="quest-buttons grid lg:grid-cols-8 grid-cols-2 gap-4 quest-number-btn-wrapper">
          {numbers.map((number) => (
            <button
              className="text-primary-purple bg-[#F3F3F3] py-3 font-medium rounded-xl text-2xl transition-transform transform hover:scale-105 hover:bg-[#E2E2E2] hover:text-primary-purple border-[3px] border-transparent focus:border-primary-purple focus:outline-none focus:shadow-outline focus:text-white focus:bg-primary-purple"
              key={number}
            >
              {number}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
