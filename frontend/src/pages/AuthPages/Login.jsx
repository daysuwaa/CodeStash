/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import Forminput from "./FormInput";
import Navbar from "../../components/Navbar";
import { useLogin } from "./useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div>
      <Navbar />

      <form
        onSubmit={handleSubmit}
        className=" rounded border-[0.3px]  border-teal-950 p-9 max-w-md mx-auto mt-4"
      >
        <div className="flex items-center ">
          <h1 className=" text-xl font-fontfamily5  text-blue-800">
            Welcome back
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

        {/* <Link to="/"> */}
        <button
          // type="submit"
          disabled={loading}
          className="bg-blue-800 hover:bg-blue-700 mt-4 text-white font-fontfamily5 w-full py-2 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
        {error && (
          <div className="error border border-red-600 text-center p-3 font-light text-white">
            {error}
          </div>
        )}
        {/* </Link> */}
        <p className="font-fontfamily5 mt-4 text-gray-400  text-sm">
          Dont have an account?
          <Link to="/signup" className="text-blue-600 mx-2 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
