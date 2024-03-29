/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import Forminput from "./FormInput";
import { useLogin } from "./useLogin";
import Navbar from "../../components/Navbar";
import Spinner from "../../components/Spinner";
import Themes from "../../components/Themes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="m-7">
      <div className="ml-auto justify-end flex">
        <Themes />
      </div>
      <div className="text-center mt-[6rem]">
        <Navbar />
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded border-[0.3px] border-lime-950 p-5 max-w-md sm:mx-auto mt-[2rem]"
      >
        <div className="flex items-center ">
          <h1 className=" text-xl font-customfont  dark:text-lime-400">
            Welcome back
          </h1>
        </div>
        <p className="font-fontfamily5 text-md dark:text-gray-400  my-4 ">
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

        <div className="relative">
          <button
            disabled={loading}
            className="bg-lime-400 hover:bg-lime-600 mt-4 text-black font-fontfamily5 w-full py-2 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? <Spinner /> : "Log in"}
          </button>
        </div>

        <p className="font-fontfamily5 mt-4 dark:text-gray-400  text-sm">
          Dont have an account?
          <Link to="/signup" className="text-lime-500 mx-2 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
