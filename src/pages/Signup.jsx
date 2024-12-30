import React from "react";
import { IoMdMailOpen, IoIosLock } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main>
      <section>
        <div className="container">
          <form className="flex mx-auto shadow-2xl max-w-screen-lg rounded-2xl overflow-hidden *:py-14 mt-12">
            <div className="bg-slate-100 w-3/5 px-8 flex flex-col gap-8 justify-center items-center">
              <h1 className="font-primaryBold text-center text-primary text-2xl leading-none">
                Welcome! <br />
                <span className="text-black font-primaryRegular text-base">
                  Create your account
                </span>
              </h1>
              <div className="flex w-full gap-2 py-2 px-5 items-center rounded-full bg-slate-50 shadow-lg">
                <FaUserCircle size={25} color="#9D9FE6" />
                <input
                  type="email"
                  placeholder="Username"
                  name="name"
                  className="font-primaryRegular bg-transparent w-full text-black px-3 py-2 rounded-full border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow-lg"
                />
              </div>
              <div className="flex w-full gap-2 py-2 px-5 items-center rounded-full bg-slate-50 shadow-lg">
                <IoMdMailOpen size={25} color="#9D9FE6" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="font-primaryRegular bg-transparent w-full text-black px-3 py-2 rounded-full border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow-lg"
                />
              </div>
              <div className="flex w-full gap-2 py-2 px-5 items-center rounded-full bg-slate-50 shadow-lg">
                <IoIosLock size={25} color="#9D9FE6" />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="font-primaryRegular bg-transparent w-full text-black px-3 py-2 rounded-full border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow-lg"
                />
              </div>
              <button
                type="submit"
                className="text-center py-2 px-8 bg-gradient-to-br from-primary to-secondary rounded-full font-primaryBold text-slate-50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Create Account
              </button>
              <h3 className="font-primaryRegular">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-primaryBold hover:underline"
                >
                  Sign in
                </Link>
              </h3>
            </div>
            <div className="bg-gradient-to-br from-primary from-45% to-secondary w-2/5 px-4 *:text-center flex flex-col gap-2 justify-center items-center">
              <h2 className="font-primaryBold text-2xl text-slate-50">
                Glad to see you!!
              </h2>
              <p className="text-slate-50 font-primaryRegular">
                Join us and start exploring the exciting world of quizzes and
                challenges.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
