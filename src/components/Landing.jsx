import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-violet-300 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <div className="px-6 md:px-0 flex flex-col items-center justify-start mt-48 max-w-[680px] mx-auto">
          <div className=" text-center font-medium md:text-left text-4xl md:text-6xl tracking-wide font-sans">
            Welcome to Paymit
          </div>
          <p className=" text-base md:text-lg font-medium opacity-80  pt-6 text-center">
          At Paymit, we're committed to streamlining the way you manage your finances. Whether you're settling up with friends, paying for a group outing, or handling service payments, Paymit simplifies each transaction. Discover the convenience of Paymit—where your payments are made easy.
          </p>
          <div className="flex gap-x-10 mt-10">
            <button
              className="bg-violet-900 hover:bg-[#000000] px-4 py-2 text-white rounded-lg"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="bg-slate-50 hover:bg-slate-100 px-4 py-2 border border-gray-400 rounded-lg"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
            <button
              className="bg-slate-50 hover:bg-slate-100 px-4 py-2 border border-gray-400 rounded-lg"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
