import { useState } from "react";
import { Link } from "react-router-dom";
import Forminput from "./FormInput";

import { useSignup } from "./useSignup";
import Navbar from "../../components/Navbar";

const Signup = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signup, loading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, username);
  };
  return (
    <div className="m-7">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className=" rounded border-[0.3px] border-lime-950 p-5 max-w-md sm:mx-auto mt-[5rem]"
      >
        <div className="flex items-center ">
          <h1 className=" md:text-2xl  text-xl font-customfont  font-light text-lime-400">
            Create an account to get started
          </h1>
        </div>
        <p className="font-fontfamily5 text-lg text-gray-400  my-4 ">Sign up</p>

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

        {/* <Link to="/"> */}
        <button
          // type="submit"
          disabled={loading}
          className="bg-lime-400 my-4 hover:bg-lime-400 text-black font-fontfamily5 w-full py-2 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>
        {/* {error && (
          <div className="error border border-red-600 text-center p-3 font-light text-white">
            {error}
          </div>
        )} */}
        {/* </Link> */}
        <p className="font-fontfamily5 mt-3 text-gray-400  text-sm">
          Already have an account?
          <Link to="/login" className="text-lime-400 mx-2 underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
