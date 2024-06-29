import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <form className="text-center text-primary-black">
      <div className="mb-6 lg:w-[27rem]">
        <label
          className=" hide-now text-gray-700 text-sm font-bold mb-2"
          htmlFor="Email"
        >
          Email
        </label>
        <div className="flex items-center  rounded-md p-2 bg-[#F3F3F3] pr-[6rem]">
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
      <div className="mb-6 lg:w-[27rem]">
        <label
          className=" hide-now text-gray-700 text-sm font-bold mb-2"
          htmlFor="Password"
        >
          Password
        </label>
        <div className="flex items-center  rounded-md p-2 bg-[#F3F3F3] pr-[6rem]">
          <FaLock className="text-primary-black mr-5" />
          <input
            type="password"
            id="password"
            name="password"
            className="flex-1 outline-none bg-transparent"
            placeholder="Password"
          />
        </div>
      </div>
      <span className=" text-start block mb-5 cursor-pointer font-semibold">
        <small className="text-primary-purple text-base">
          Forgot Password?
        </small>
      </span>
      <button className="text-xl bg-primary-purple lg:w-auto w-full py-2 text-white art lg:px-20 px-8 rounded-xl font-semibold ">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
