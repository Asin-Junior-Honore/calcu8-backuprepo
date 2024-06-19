import { BsSearch } from "react-icons/bs";
import solorcloud from "../../assets/solarcloudlineduotone.svg";
import ambassador from "../../assets/freetrialambassador.svg";
import graph from "../../assets/graphcharthistories.svg";

const Dashboard = () => {
  type Exam = {
    id: number;
    imgSrc: string;
    title: string;
  };

  const examData: Exam[] = [
    {
      id: 1,
      imgSrc: "/src/assets/gcelogo.svg",
      title: "wassce/gce",
    },
    {
      id: 2,
      imgSrc: "/src/assets/jamblogo.svg",
      title: "jamb",
    },
    {
      id: 3,
      imgSrc: "/src/assets/postutmelogo.svg",
      title: "post utme",
    },
    {
      id: 4,
      imgSrc: "/src/assets/necologo.svg",
      title: "neco",
    },
    {
      id: 5,
      imgSrc: "/src/assets/nabteblogo.svg",
      title: "nabteb",
    },
    {
      id: 6,
      imgSrc: "/src/assets/juniorwaeclogo.svg",
      title: "bece (Junior waec)",
    },
  ];
  return (
    <section>
      <div className="lg:p-8 p-4 africanart relative lg:h-96 flex justify-center flex-col">
        <h2 className=" font-medium text-4xl leading-[56px] mb-6">
          Morning,{" "}
          <span className="font-semibold block">
            Mufteey Aleeyu{" "}
            <img src={solorcloud} className="inline-block" alt="cloud" />
          </span>
        </h2>

        <div className="text-center lg:my-0 my-8">
          <div className="relative lg:w-[724px] mx-auto ">
            <BsSearch
              size={20}
              className="absolute lg:left-3 left-5 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search examinations"
              className="w-full rounded-2xl text-black py-3 pl-10 pr-4 placeholder-custom"
            />
          </div>
        </div>
      </div>

      <main className="lg:p-8 p-4">
        <section className="flex justify-between items-center overflow-hidden lg:py-0 py-10 lg:px-28 px-4 africanart_freetrial relative ">
          <div>
            <h3 className="text-primary-purple font-bold lg:text-4xl text-2xl">
              7 Days Free Trial
            </h3>
            <p className="text-[#545454] lg:my-10 my-3 lg:text-2xl pr-[125px]">
              Unlock math excellence! Grab your license or try our 7-day free
              trial.
            </p>
            <button className="text-xl bg-primary-purple lg:py-3 py-2 lg:px-28 px-8 rounded-xl font-semibold art">
              Join Now
            </button>
          </div>

          <div className="lg:w-[35rem] w-full lg:relative -z-[5] absolute lg:left-0 left-[35px] top-0">
            <img src={ambassador} className="h-full w-full" alt="" />
          </div>
        </section>

        <section className="flex flex-col items-center mt-14 py-12 Histories-scores relative ">
          <div>
            <img src={graph} className="h-full w-full" alt="" />
          </div>

          <div>
            <h3 className="text-primary-purple font-bold lg:text-4xl text-2xl">
              Histories & Scores
            </h3>
          </div>
        </section>

        <section className="categories-of-exam mt-14 pb-10">
          <div className="my-8 lg:text-start text-center">
            <h2 className=" text-primary-purple lg:text-3xl text-2xl font-medium">
              Click to Choose Category
            </h2>
          </div>
          <main className="grid lg:grid-cols-2 gap-10">
            {examData.map((exam) => (
              <div
                key={exam.id}
                className="bg-[#F3F3F3] py-12 px-5 space-y-8 rounded-xl flex flex-col items-center justify-center"
              >
                <img src={exam.imgSrc} alt={exam.title} />
                <h2 className="text-primary-black text-3xl font-medium uppercase">
                  {exam.title}
                </h2>
              </div>
            ))}
          </main>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
