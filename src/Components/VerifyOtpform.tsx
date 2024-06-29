export default function VerifyOtpform() {
  return (
    <form className="text-center text-primary-black lg:px-0 px-8">
      <span className="text-center block mb-5 font-semibold">
        <small className="text-[#A6A6A6] text-base">
          Enter verification code sent to your registered email address
        </small>
      </span>

      {/* Four input boxes for users to enter OTP number */}
      <div className="flex justify-between mb-5">
        <input
          type="text"
          maxLength={1}
          className="w-16 h-14 text-xl text-center bg-[#F3F3F3] rounded-md focus:outline-none focus:border-primary-purple focus:border-2"
        />
        <input
          type="text"
          maxLength={1}
          className="w-16 h-14 text-xl text-center bg-[#F3F3F3] rounded-md focus:outline-none focus:border-primary-purple focus:border-2"
        />
        <input
          type="text"
          maxLength={1}
          className="w-16 h-14 text-xl text-center bg-[#F3F3F3] rounded-md focus:outline-none focus:border-primary-purple focus:border-2"
        />
        <input
          type="text"
          maxLength={1}
          className="w-16 h-14 text-xl text-center bg-[#F3F3F3] rounded-md focus:outline-none focus:border-primary-purple focus:border-2"
        />
      </div>

      <span className="text-start block mb-8 cursor-pointer font-semibold">
        <small className="text-primary-purple text-base">
          Resend code again
        </small>
      </span>
      <button className="text-xl bg-primary-purple lg:w-auto w-full py-2 text-white art lg:px-20 px-8 rounded-xl font-semibold">
        Proceed
      </button>
    </form>
  );
}
