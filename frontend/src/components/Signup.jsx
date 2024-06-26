import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupAtom } from "../store/userAtom";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import axios from "axios";

const Signup = () => {
  const [signupValue, setSignupValue] = useRecoilState(signupAtom);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async () => {
    try {
      setIsLoading(true);
      const baseUrl = import.meta.env.VITE_BACKEND_URL;
      const url = `${baseUrl}/user/signup`;

      const { data } = await axios.post(url, signupValue);

      if (data.success) {
        toast.success("User signed up successfully");
        setSignupValue({
          firstName: "",
          lastName: "",
          username: "",
          password: "",
        });
        navigate("/signin");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center absolute top-0 z-[-2]  transform bg-violet-300 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <div className="w-[350px]  md:w-[380px] h-[600px] bg-slate-50 rounded-md py-4 px-8 border border-slate-300">
        <div className="text-center text-3xl font-extrabold ">Sign Up</div>
        <p className="text-center text-base  text-gray-600 pt-2 font-medium">
          Enter your information to create an account
        </p>
        <div className="flex flex-col gap-y-4 pt-6">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="fn" className="text-sm font-bold">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              id="fn"
              className="p-2 border border-slate-300"
              value={signupValue.firstName}
              onChange={(e) => {
                return setSignupValue((prev) => {
                  return {
                    ...prev,
                    firstName: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="ln" className="text-sm font-bold">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              id="ln"
              className="p-2 border border-slate-300"
              value={signupValue.lastName}
              onChange={(e) => {
                return setSignupValue((prev) => {
                  return {
                    ...prev,
                    lastName: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="text-sm font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              id="email"
              className="p-2 border border-slate-300"
              value={signupValue.username}
              onChange={(e) => {
                return setSignupValue((prev) => {
                  return {
                    ...prev,
                    username: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="pwd" className="text-sm font-bold">
              Password
            </label>
            <input
              type="text"
              id="pwd"
              className="p-2 border border-slate-300"
              value={signupValue.password}
              onChange={(e) => {
                return setSignupValue((prev) => {
                  return {
                    ...prev,
                    password: e.target.value,
                  };
                });
              }}
            />
          </div>

          {isLoading ? (
            <ScaleLoader color="black" className="flex justify-center" />
          ) : (
            <button
              className="w-full rounded-md bg-violet-900 text-white p-2
          "
              onClick={signup}
            >
              Sign Up
            </button>
          )}
          <p className="text-center font-semibold">
            Already have an account?{" "}
            <span className="underline">
              <Link to={"/signin"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
