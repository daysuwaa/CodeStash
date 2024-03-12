/* eslint-disable react/no-unescaped-entities */
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
          className="rounded w-full py-2 px-3 mt-2  focus:outline-none focus:border-teal-300 focus:shadow-outline text-gray-700 leading-tight  focus:shadow-outline"
        />
      </label>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
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
            <h1 className=" text-xl font-fontfamily5  text-teal-500">
              Welcome back :)
            </h1>
          </div>
          <p className="font-fontfamily5 text-md text-gray-400  my-4 ">
            Log in to continue
          </p>

          <Forminput
            label="Username"
            type="text"
            id="username"
            value={username}
            setValue={setUsername}
          />

          <Forminput
            label="Password"
            type="password"
            id="password"
            value={password}
            setValue={setPassword}
          />

          <Link
            to="/fpass"
            className=" flex items-center justify-end mb-6 underline "
          >
            <p className="font-fontfamily5 hover:underline  text-gray-400 text-sm ">
              Forgotten password?
            </p>
          </Link>

          <Link to="/home">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-fontfamily5 w-full py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>
          </Link>
          <p className="font-fontfamily5 mt-4 text-gray-400  text-sm">
            Dont have an account?
            <Link to="/" className="text-teal-500 mx-2 underline">
              Sign up
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

export default Login;
