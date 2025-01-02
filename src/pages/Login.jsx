import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoMdMailOpen, IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email("Email tidak valid")
    .refine((email) => email.endsWith("@gmail.com"), {
      message: "Email harus menggunakan domain gmail.com",
    }),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

const Login = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email: gmail, password });

    if (!result.success) {
      const errors = result.error.errors.reduce(
        (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
        {}
      );
      setFormError(errors);
    } else {
      if (gmail === "user@gmail.com" && password === "rahasia") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify({ email: gmail }));
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        toast.error("Invalid username or password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setFormError({ email: "", password: "" });
      }
    }
  };

  return (
    <main>
      <ToastContainer />
      <section>
        <div className="container flex justify-center py-32 lg:py-8">
          <form
            onSubmit={handleSubmit}
            className="flex shadow-2xl w-full max-w-md md:max-w-screen-lg rounded-2xl overflow-hidden *:py-14 mt-12 "
          >
            <div className="bg-slate-100 w-full md:w-3/5 px-8 flex flex-col gap-8 justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="font-primaryBold text-center text-primary text-2xl leading-none"
              >
                Hello! <br />
                <span className="text-black font-primaryRegular text-base">
                  Sign in to your account
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full space-y-2"
              >
                <div className="flex gap-2 py-2 px-5 items-center rounded-full bg-slate-50 shadow-lg">
                  <IoMdMailOpen size={25} color="#9D9FE6" />
                  <input
                    type="text"
                    placeholder="Email"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    name="email"
                    className="font-primaryRegular bg-transparent w-full text-black px-3 py-2 rounded-full border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow-lg"
                  />
                </div>
                {formError.email && (
                  <p className="text-red-500 text-sm mt-1">{formError.email}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full space-y-2"
              >
                <div className="flex  gap-2 py-2 px-5 items-center rounded-full bg-slate-50 shadow-lg">
                  <IoIosLock size={25} color="#9D9FE6" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    className="font-primaryRegular bg-transparent w-full text-black px-3 py-2 rounded-full border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow-lg"
                  />
                </div>
                {formError.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formError.password}
                  </p>
                )}
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="self-end -mt-4 "
              >
                <Link className=" text-black font-primaryRegular hover:underline">
                  Forgot password?
                </Link>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
                type="submit"
                className="text-center py-2 px-8 bg-gradient-to-br from-primary to-secondary rounded-full font-primaryBold text-slate-50 shadow-lg "
              >
                Sign In
              </motion.button>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="font-primaryRegular"
              >
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary font-primaryBold hover:underline"
                >
                  Create
                </Link>
              </motion.h3>
            </div>
            <div className="bg-gradient-to-br from-primary from-45% to-secondary w-2/5 px-4 *:text-center flex-col gap-2 justify-center items-center hidden md:flex">
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="font-primaryBold text-2xl text-slate-50"
              >
                Welcome Back!!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-slate-50 font-primaryRegular"
              >
                Log in to continue your journey and test your knowledge.
              </motion.p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
