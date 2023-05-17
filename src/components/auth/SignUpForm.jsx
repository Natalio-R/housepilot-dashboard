import React from "react";
import { useForm } from "react-hook-form";
import supabase from "../../supabaseClient";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Register the user using Supabase
      const { user, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        console.error(error);
        return;
      }

      // User registration successful
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <>
      <div className="w-3/6 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center px-6 py-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black mb-6">
          Create and account
        </h1>
        <div className="space-y-4 md:space-y-6 w-full px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={(e) => signInWithGoogle(e)}
              className="w-2/4 py-4 border-2 flex items-center justify-center gap-3 border-black rounded-lg text-black hover:text-white hover:bg-black transition"
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Sign Up with Google</span>
            </button>
            <button className="w-2/4 py-4 border-2 flex items-center justify-center gap-3 border-black rounded-lg text-black hover:text-white hover:bg-black transition">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/183607/facebook.svg"
                loading="lazy"
                alt="facebook logo"
              />
              <span>Sign Up with Facebook</span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-500 h-0.5"></div>
            <p className="text-lg text-gray-500 font-medium mx-4">or</p>
            <div className="w-full bg-gray-500 h-0.5"></div>
          </div>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <div className="w-2/4">
                <label htmlFor="name" className="text-lg font-medium">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="w-2/4">
                <label htmlFor="email" className="text-lg font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2/4">
                <label htmlFor="password" className="text-lg font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="w-2/4">
                <label
                  htmlFor="confirm-password"
                  className="text-lg font-medium"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-500">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline"
                    href="/"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="transition w-full text-white hover:text-black border-2 border-black bg-black hover:bg-white font-medium rounded-lg text-md px-4 py-3 text-center"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
