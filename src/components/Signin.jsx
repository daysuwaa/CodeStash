import { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Forminput = ({ label, htmlFor, type, value, setValue }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-gray-400 text-sm font-fontfamily5 mb-2"
      >
        {label}

        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="  rounded w-full bg-slate-300 mt-2 py-2 px-3  focus:outline-none focus:border-teal-300 focus:shadow-outline text-gray-700 leading-tight  focus:shadow-outlin"
        />
      </label>
    </div>
  );
};

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="mt-[35%] mx-5 md:mt-[7%] items-center justify-center">
        <h1 className="font-fontfamily3 items-center flex flex-col text-5xl mb-6 font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-500">
            CodeStash
          </span>
        </h1>

        <form className=" rounded border-[0.3px]  border-teal-950 p-9 max-w-md mx-auto mt-4">
          <div className="flex items-center ">
            <h1 className=" md:text-2xl  text-xl font-fontfamily5 font-semibold  text-teal-500">
              Create an account to get started ;)
            </h1>
          </div>
          <p className="font-fontfamily5 text-lg text-gray-400  my-4 ">
            Sign in
          </p>

          <Forminput
            label="Username"
            type="text"
            id="username"
            value={username}
            setValue={setUsername}
          />
          <Forminput
            label="Email Address"
            type="email"
            id="emailadd"
            value={email}
            setValue={setEmail}
          />

          <Forminput
            label="Password"
            type="password"
            id="password"
            value={password}
            setValue={setPassword}
          />

          <Link to="/home">
            <button
              type="submit"
              className="bg-teal-500 my-4 hover:bg-teal-700 text-white font-fontfamily5 w-full py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up
            </button>
          </Link>
          <p className="font-fontfamily5 mt-3 text-gray-400  text-sm">
            Already have an account?
            <Link to="/login" className="text-teal-500 mx-2 underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Forminput.propTypes = {
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Signin;
