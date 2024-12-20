import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/logo.png";
import { NavLink } from "react-router-dom";


export default function Signup() {
  return (
    <>
      <nav className="mt-8 ">
        <NavLink to="/">
          <img className="w-[250px] ml-[40%] " alt="item_image" src={logo} />
        </NavLink>
      </nav>
      <div className="wrapper signUp p-10 w-1/2 mx-auto  flex items-center">
        <div className="form p-6 basis-full">
          <div className="heading text-xl font-bold text-center">
            CREATE AN ACCOUNT
          </div>
          <form action="/">
            <div>
              <label className="block my-5 mb-4" htmlFor="name">
                Name
              </label>
              <input
                className="h-10 w-full p-4 bg-[#f1f9ff] border-2 border-[#bce0fd] rounded-lg"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block my-5 mb-4" htmlFor="name">
                E-Mail
              </label>
              <input
                className="h-10 w-full p-4 bg-[#f1f9ff] border-2 border-[#bce0fd] rounded-lg"
                type="text"
                id="name"
                placeholder="Enter your mail"
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
            >
              Submit
            </button>
            <h2 align="center" className="or my-4">
              OR
            </h2>
          </form>
          <p className="mt-[1rem]">
            Have an account ?{" "}
            <Link to="/" className="text-blue-800">
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
