import { FaEnvelope } from "react-icons/fa";

const PasswordResetForm = () => {
  return (
    <form className="text-center text-primary-black">
      <span className=" text-center block mb-5  font-semibold">
        <small className="text-[#A6A6A6] text-base">
          Enter your Email address below
        </small>
      </span>
      <div className="mb-6 lg:w-[27rem]">
        <label
          className=" hide-now text-gray-700 text-sm font-bold mb-2"
          htmlFor="Email"
        >
          Email
        </label>
        <div className="flex items-center  rounded-md p-2 bg-[#F3F3F3]  lg:pr-[6rem] pr-[3rem]">
          <FaEnvelope className="text-primary-black mr-5" />
          <input
            type="email"
            id="Email"
            name="email"
            className="flex-1 outline-none bg-transparent"
            placeholder="Email"
          />
        </div>
      </div>

      <button className="text-xl bg-primary-purple lg:w-auto w-full py-2 text-white art lg:px-20 px-8 rounded-xl font-semibold ">
        Send
      </button>
    </form>
  );
};

export default PasswordResetForm;
