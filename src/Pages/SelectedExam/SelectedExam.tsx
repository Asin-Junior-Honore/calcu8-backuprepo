import { BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { years } from "../../utils/years";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import Navbar from "../../Components/Navbar";

const SelectedExam = () => {
  const location = useLocation();
  const { exam } = location.state || {};

  if (!exam) {
    return <div>No exam selected</div>;
  }

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
        <div className="selected-exam rounded-xl py-14 space-y-8 bg-primary-purple lg:px-[10rem] lg:w-auto w-full text-center inline-block">
          <img src={exam.imgSrc} alt={exam.title} className="m-auto" />
          <h2 className="text-3xl font-medium uppercase">{exam.title}</h2>
        </div>

        <div className="my-8">
          <h2 className=" text-primary-purple lg:text-3xl text-2xl font-medium">
            Select Year
          </h2>
        </div>

        <span className="grid lg:grid-cols-7 grid-cols-2 gap-4 years-btn-wrapper">
          {years.map((year) => (
            <button
              className="text-[#A6A6A6] bg-[#F3F3F3] py-3 px-14 font-medium rounded-xl text-2xl transition-transform transform hover:scale-105 hover:bg-[#E2E2E2] hover:text-primary-purple border-[3px] border-transparent focus:border-primary-purple focus:outline-none focus:shadow-outline focus:text-primary-purple"
              key={year}
            >
              {year}
            </button>
          ))}
        </span>

        <span className="my-10 block lg:text-start text-center">
          <h2 className="text-[#A6A6A6] lg:text-3xl text-2xl">
            <strong className="uppercase text-primary-purple">
              {exam.title}
            </strong>{" "}
            Mathematics
          </h2>
        </span>

        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0 space-y-10">
          <span className="uppercase art text-black justify-center flex items-center rounded-xl px-8 py-4 bg-[#F3F3F3] space-x-8">
            <CiCircleQuestion size={35} strokeWidth={0.5} />
            <p className="text-primary-purple font-medium text-xl">
              questions : 40
            </p>
          </span>
          <span className="uppercase art text-black flex items-center justify-center rounded-xl px-8 py-4 bg-[#F3F3F3] space-x-8">
            <MdOutlineTimer size={35} />
            <p className="text-primary-purple font-medium text-xl">
              time : 40 mins
            </p>
          </span>
        </div>

        <div className="my-10 text-primary-black">
          <h4 className="font-medium lg:text-3xl text-2xl leading-10">
            You are about to engage in an official{" "}
            <span className="uppercase">{exam.title}</span> exam practice
            session.
          </h4>
          <ul className="list-disc list-inside text-primary-purple lg:text-2xl text-xl mt-10 space-y-8">
            <li className="relative pl-[1em] -indent-[1.75rem]">
              At the end of your practice, you can select 'Review' to view the
              correct answers and detailed solutions.
            </li>
            <li className="relative pl-[1em] -indent-[1.75rem]">
              Your results will only be displayed with your permission.
            </li>
            <li className="relative pl-[1em] -indent-[1.75rem]">
              To begin your practice session, simply click the 'START' button.
            </li>
          </ul>
        </div>

        <span>
          <button className="text-xl bg-primary-purple lg:w-auto w-full py-3  lg:px-28 px-8 rounded-xl font-semibold art">
            Start Exams
          </button>
        </span>
      </section>
    </main>
  );
};

export default SelectedExam;
