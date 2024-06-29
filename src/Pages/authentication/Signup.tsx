import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import SignupForm from "../../Components/SignupForm";

const Signup = () => {
  return (
    <section className="flex h-screen justify-center lg:flex-row flex-col ">
      <aside className="signin bg-primary-purple flex items-center flex-grow-[0.5] justify-center flex-col lg:py-0 py-10">
        <h2 className="lg:text-5xl text-4xl font-semibold">Welcome Back</h2>
        <p className="lg:my-9 my-4 text-center text-xl px-3">
          To stay connected with us,
          <span className="hidden lg:inline">
            <br />
          </span>
          please sign in using your
          <span className="hidden lg:inline">
            <br />
          </span>
          personal details
        </p>

        <button className="text-xl bg-white py-2 text-primary-purple lg:px-24 px-20 rounded-xl font-semibold">
          Sign In
        </button>
      </aside>

      <aside className="signup  flex-grow-[1] flex items-center justify-center flex-col lg:mt-0 pb-8 mt-8">
        <h2 className="lg:text-5xl text-4xl text-primary-purple font-semibold">
          Create Account
        </h2>
        <div className="flex justify-center space-x-8 my-9 text-primary-black">
          <span className="flex items-center justify-center w-14  h-14 bg-[#F3F3F3] rounded-full">
            <FaFacebookF />
          </span>
          <span className="flex items-center justify-center w-14  h-14 bg-[#F3F3F3] rounded-full">
            <FaGoogle />
          </span>
          <span className="flex items-center justify-center w-14  h-14 bg-[#F3F3F3] rounded-full">
            <FaLinkedinIn />
          </span>
        </div>
        <SignupForm />
      </aside>
    </section>
  );
};

export default Signup;
