import LoginForm from "../../Components/LoginForm";

const Login = () => {
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
          Sign Up
        </button>
      </aside>

      <aside className="signup  flex-grow-[1] flex items-center justify-center flex-col lg:mt-0 pb-8 mt-8">
        <h2 className="lg:text-5xl text-4xl text-primary-purple font-semibold mb-8">
          Sign In
        </h2>
        <LoginForm />
      </aside>
    </section>
  );
};

export default Login;
