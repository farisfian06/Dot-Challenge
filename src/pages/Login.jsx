import React, { useEffect, useState } from "react";
import { IoMdMailOpen, IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
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
  const [error, setError] = useState("");
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
      // Jika validasi berhasil, lakukan pengecekan user
      if (gmail === "user@gmail.com" && password === "rahasia") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify({ email: gmail }));
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid username or password");
        setFormError({ email: "", password: "" });
      }
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="flex mx-auto shadow-2xl max-w-screen-lg rounded-2xl overflow-hidden *:py-14 mt-12"
          >
            <div className="bg-slate-100 w-3/5 px-8 flex flex-col gap-8 justify-center items-center">
              <h1 className="font-primaryBold text-center text-primary text-2xl leading-none">
                Hello! <br />
                <span className="text-black font-primaryRegular text-base">
                  Sign in to your account
                </span>
              </h1>
              <div className="w-full space-y-2">
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
              </div>
              <div className="w-full space-y-2">
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
              </div>
              <Link className="self-end text-black font-primaryRegular -mt-4 hover:underline">
                Forgot password?
              </Link>
              <button
                type="submit"
                className="text-center py-2 px-8 bg-gradient-to-br from-primary to-secondary rounded-full font-primaryBold text-slate-50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Sign In
              </button>
              <h3 className="font-primaryRegular">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary font-primaryBold hover:underline"
                >
                  Create
                </Link>
              </h3>
            </div>
            <div className="bg-gradient-to-br from-primary from-45% to-secondary w-2/5 px-4 *:text-center flex flex-col gap-2 justify-center items-center">
              <h2 className="font-primaryBold text-2xl text-slate-50">
                Welcome Back!!
              </h2>
              <p className="text-slate-50 font-primaryRegular">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus, inventore!
              </p>
            </div>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </section>
    </main>
  );
};

export default Login;
