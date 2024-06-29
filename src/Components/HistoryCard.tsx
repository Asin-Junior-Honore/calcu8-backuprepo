import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const HistoryScorecard = () => {
  return (
    <div className="lg:p-8 p-4 pb-14">
      <h1 className="text-4xl font-bold mb-[4rem] text-primary-purple">
        Histories & Scores
      </h1>

      <div className=" gap-y-[10rem] lg:gap-y-[8rem] flex flex-col">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center lg:flex-row flex-col justify-between"
            >
              <aside className="lg:w-48 h-48 relative">
                <CircularProgressbar
                  value={60}
                  text={`60%`}
                  styles={buildStyles({
                    textSize: "18px",
                    pathColor: "#6D28D9",
                    textColor: "#6D28D9",
                    trailColor: "#d6d6d6",
                  })}
                />
                <p className="mt-2 lg:text-sm text-xl font-bold absolute top-44 lg:top-28 lg:left-11 left-20  text-primary-purple">
                  Overall Accuracy
                </p>
              </aside>

              <aside className="flex-grow-[0.5] lg:mt-0 mt-[15rem]">
                <div className="flex stats lg:flex-row flex-col items-center lg:rounded-tr-3xl lg:rounded-br-full art shadow-sm  lg:px-7  rounded-lg relative">
                  <div className="flex items-center">
                    <div className="space-y-2 text-primary-purple  text-center lg:text-start">
                      <h3 className="font-medium lg:text-3xl text-5xl">
                        WASSCE/GCE
                      </h3>
                      <p className="font-semibold text-3xl lg:text-lg">
                        Mathematics
                      </p>
                      <p className="font-semibold lg:text-lg text-2xl">
                        40 Questions | 60 mins
                      </p>
                    </div>
                  </div>
                  <div className="gap-4 flex lg:flex-row flex-col lg:ml-8 lg:items-start items-center">
                    <hr className="border-t-0 border-l-[5px] border-primary-purple h-[150px] lg:mx-2 transform lg:rotate-0 rotate-90" />
                    <div className="flex text-[#46DAA8]  flex-col justify-center gap-y-5 items-center lg:text-2xl text-4xl font-semibold">
                      <h4 className="">Correct</h4>
                      <h5 className="">10</h5>
                    </div>
                    <hr className="border-t-0 border-l-[5px] border-primary-purple h-[150px] lg:mx-2 transform lg:rotate-0 rotate-90" />
                    <div className="flex text-[#EA3800] flex-col justify-center gap-y-5 items-center lg:text-2xl text-4xl font-semibold">
                      <h4 className=" ">Incorrect</h4>
                      <h5 className="">4</h5>
                    </div>
                    <hr className="border-t-0 border-l-[5px] border-primary-purple h-[150px] lg:mx-2 transform lg:rotate-0 rotate-90" />
                    <div className="flex text-[#F4EB01] flex-col justify-center gap-y-5 items-center lg:text-2xl text-4xl font-semibold">
                      <h4 className=" ">Skipped</h4>
                      <h5 className="">2</h5>
                    </div>
                    <hr className="border-t-0 border-l-[5px] border-primary-purple h-[150px] lg:mx-2 transform lg:rotate-0 rotate-90" />
                    <div className="flex text-primary-purple flex-col justify-center gap-y-5 items-center lg:text-2xl text-4xl font-semibold">
                      <h4 className=" ">Velocity</h4>
                      <h5 className="">Fast</h5>
                    </div>
                    <hr className="border-t-0 border-l-[5px] border-primary-purple h-[150px] lg:mx-2 transform lg:rotate-0 rotate-90" />
                    <div className="flex text-primary-purple flex-col justify-center gap-y-5 items-center lg:text-2xl text-4xl font-semibold">
                      <h4 className=" ">Velocity</h4>
                      <h5 className="">Pass</h5>
                    </div>
                  </div>
                  <div className="absolute -top-8 right-4 lg:text-base text-lg text-gray-500 ">
                    {new Date().toISOString().split("T")[0]}{" "}
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>

                <Link to="/studentPerformance">
                  <div className="viewmore lg:mt-4 lg:text-start text-center mt-10 ">
                    <b className="text-primary-purple lg:text-xl text-2xl cursor-pointer  underline ml-8 block">
                      View More
                    </b>
                  </div>
                </Link>
              </aside>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HistoryScorecard;
