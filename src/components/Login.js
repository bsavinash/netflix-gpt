import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const toggleSignUp = () => {
    setIsSignIn(!isSignin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
        {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUp}>
          
          {isSignin ? "New to Netflix? Sign Up Now" : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
