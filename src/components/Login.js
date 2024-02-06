import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full ">
        <img
          className="w-full"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="bg_image"
        />
      </div>
      <form className="absolute   w-3/12 p-12 mt-32 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-4xl px-2 py-4">{isSignInForm? "Sign In":"Sign Up"} </h1>
        
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name "
          className="p-2 my-3 w-full rounded-lg bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full rounded-lg bg-gray-700"
        />
        <input
          type="password"
          placeholder=" Password"
          className="p-2 my-3 w-full rounded-lg bg-gray-700"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg ">
        {isSignInForm? "Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now":"Already Registered!! SignIn Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
