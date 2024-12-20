import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/logo.png";
import { NavLink } from "react-router-dom";

import "./Login.css";
const preventRefresh = (e) => {
  e.preventDefault();
  window.location.href = "/home"; // Replace '/home' with your desired route
};

export default function Login() {
  return (
    <>
      <div className="p-20">
        <nav className="">
          <NavLink to="/">
            <img className="w-[250px] ml-[40%] " alt="item_image" src={logo} />
          </NavLink>
        </nav>
        <div className="wrapper signIn  w-1/2 mx-auto  flex items-center mt-5">
          <div className="form p-6 basis-full">
            <div className="heading text-xl font-bold text-center">LOGIN</div>
            <form>
              <div>
                <label className="block my-5 mb-4" htmlFor="e-mail">
                  Username or Email
                </label>
                <input
                  className="h-10 w-full p-4 bg-[#f1f9ff] border-2 border-[#bce0fd] rounded-lg"
                  type="text"
                  id="e-mail"
                  placeholder="Enter your e-mail	"
                />
              </div>
              <div>
                <label className="block my-5 mb-4" htmlFor="password">
                  Password
                </label>
                <input
                  className="h-10 w-full p-4 bg-[#f1f9ff] border-2 border-[#bce0fd] rounded-lg"
                  type="password"
                  id="password"
                  placeholder="Enter you password"
                />
              </div>
              <button
                className="h-10 w-full bg-[#258de6] text-white uppercase tracking-wider font-bold mt-6 rounded-lg hover:brightness-95"
                type="submit"
                onClick={preventRefresh}
              >
                Submit
              </button>
            </form>
            <p className="mt-[1rem]">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-blue-800">
                {" "}
                Sign In{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
