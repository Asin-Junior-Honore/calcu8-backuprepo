import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const Analysis = () => {
  return (
    <main className="lg:p-8 p-4 pb-14">
      <h1 className="lg:text-4xl text-3xl font-bold mb-[4rem] text-primary-purple">
        Performance Analysis
      </h1>

      <section className="grid lg:grid-cols-2 gap-x-10 gap-y-28 mt-[5rem]">
        <div className=" flex items-center lg:flex-row flex-col ">
          <aside className="w-48 h-48 relative">
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
            <p className="mt-2 text-sm font-bold absolute top-28 left-11  text-primary-purple">
              Overall Accuracy
            </p>
          </aside>
          <div className="lg:ml-14 mt-14 lg:mt-0 space-y-4 lg:text-start text-center">
            <h3 className="font-bold lg:text-3xl text-2xl text-primary-purple">
              Algebra
            </h3>
            <p className="text-gray-400 text-xl font-semibold">
              Questions Correct: <b className="text-primary-purple">4/5</b>{" "}
            </p>
          </div>
        </div>
        <div className=" flex items-center lg:flex-row flex-col ">
          <aside className="w-48 h-48 relative">
            <CircularProgressbar
              value={60}
              text={`60%`}
              styles={buildStyles({
                textSize: "18px",
                pathColor: "#46DAA8",
                textColor: "#46DAA8",
                trailColor: "#d6d6d6",
              })}
            />
            <p className="mt-2 text-sm font-bold absolute top-28 left-11  text-primary-purple">
              Overall Accuracy
            </p>
          </aside>
          <div className="lg:ml-14 mt-14 lg:mt-0 space-y-4 lg:text-start text-center">
            <h3 className="font-bold lg:text-3xl text-2xl text-primary-purple">
              Statistics
            </h3>
            <p className="text-gray-400 text-xl font-semibold">
              Questions Correct: <b className="text-[#46DAA8]">4/5</b>{" "}
            </p>
          </div>
        </div>{" "}
        <div className=" flex items-center lg:flex-row flex-col ">
          <aside className="w-48 h-48 relative">
            <CircularProgressbar
              value={60}
              text={`60%`}
              styles={buildStyles({
                textSize: "18px",
                pathColor: "#EF71A0",
                textColor: "#EF71A0",
                trailColor: "#d6d6d6",
              })}
            />
            <p className="mt-2 text-sm font-bold absolute top-28 left-11  text-primary-purple">
              Overall Accuracy
            </p>
          </aside>
          <div className="lg:ml-14 mt-14 lg:mt-0 space-y-4 lg:text-start text-center">
            <h3 className="font-bold lg:text-3xl text-2xl text-primary-purple">
              Geometry
            </h3>
            <p className="text-gray-400 text-xl font-semibold">
              Questions Correct: <b className="text-[#EF71A0]">4/5</b>{" "}
            </p>
          </div>
        </div>{" "}
        <div className=" flex items-center lg:flex-row flex-col ">
          <aside className="w-48 h-48 relative">
            <CircularProgressbar
              value={60}
              text={`60%`}
              styles={buildStyles({
                textSize: "18px",
                pathColor: "#FFCC84",
                textColor: "#FFCC84",
                trailColor: "#d6d6d6",
              })}
            />
            <p className="mt-2 text-sm font-bold absolute top-28 left-11  text-primary-purple">
              Overall Accuracy
            </p>
          </aside>
          <div className="lg:ml-14 mt-14 lg:mt-0 space-y-4 lg:text-start text-center">
            <h3 className="font-bold lg:text-3xl text-2xl text-primary-purple">
              Trigonometric
            </h3>
            <p className="text-gray-400 text-xl font-semibold">
              Questions Correct: <b className="text-primary-purple">4/5</b>{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
