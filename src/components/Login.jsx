import React, { useRef, useState } from "react";
import Header from "./Header";
import { validationCheck, validationCheckname } from "../utils/Validation";

const Login = () => {
  const bg =
    "https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const nameFull = useRef();

  const handleSubmit = () => {
    const message = validationCheck(
      email.current.value,
      password.current.value
    );
    console.log("message : ", message);
    setErrorMessage(message);
  };
  
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleGoogalLogin = () => {
    setIsSignIn(!isSignIn)
    alert('test')
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bg} alt="" />
      </div>

      <div className="w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80">
        <form className="text-white" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign-Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              // ref={nameFull}
              placeholder="Full Name..."
              className="m-2 p-4 w-full bg-gray-700"
              // required
            />
          )}

          {!isSignIn && (
            <input
              // ref={mob}
              type="number"
              placeholder="Phone Number..."
              className="m-2 p-4 w-full bg-gray-700"
              // required
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Id..."
            className="m-2 p-4 w-full bg-gray-700"
            // required
          />
          <input
            ref={password}
            type="password"
            placeholder="Password ..."
            className="m-2 p-4 w-full bg-gray-700"
            // required
          />
          <p className="text-red-500 font-bold m-5">{errorMessage}</p>
          <button
            className="p-4 m-2 w-full bg-red-700 rounded-lg"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign In" : "Sign-Up"}
          </button>
          <p className="capitalize cursor-pointer" onClick={handleToggle}>
            {isSignIn
              ? "new to netflix ? sign up here"
              : "already have an account? sign in"}
          </p>
          <p>Or</p>
          {isSignIn && <button className="p-4 m-2 w-full bg-green-700 rounded-lg" onClick={handleGoogalLogin}>Googal Login</button>}
        </form>
      </div>
    </div>
  );
};

export default Login;
