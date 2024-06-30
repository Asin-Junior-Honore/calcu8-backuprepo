import { FaLock } from "react-icons/fa";

export const NewpasswordForm = () => {
  return (
    <form className="text-center text-primary-black">
      <span className="text-center block mb-5 font-semibold">
        <small className="text-[#A6A6A6] text-base">
          Enter your new password below
        </small>
      </span>
      <div className="mb-6 lg:w-[27rem]">
        <label
          className="hide-now text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="flex items-center rounded-md p-2 bg-[#F3F3F3]  lg:pr-[6rem] pr-[3rem]">
          <FaLock className="text-primary-purple mr-5" />
          <input
            type="password"
            id="password"
            name="password"
            className="flex-1 outline-none bg-transparent"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="mb-6 lg:w-[27rem]">
        <label
          className="hide-now text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <div className="flex items-center rounded-md p-2 bg-[#F3F3F3] pr-[6rem]">
          <FaLock className="text-primary-purple mr-5" />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="flex-1 outline-none bg-transparent"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <button className="text-xl bg-primary-purple lg:w-auto w-full py-2 text-white art lg:px-20 px-8 rounded-xl font-semibold">
        Submit
      </button>
    </form>
  );
};
