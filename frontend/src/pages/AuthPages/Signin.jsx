import { useState } from "react";
import { Link } from "react-router-dom";
import Forminput from "./FormInput";
import Navbar from "../../components/Navbar";
import { useSignup } from "./useSignup";
import Logout from "../../components/Logout";

const Signup = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <div>
      <Navbar />
      <Logout />
      <form
        onSubmit={handleSubmit}
        className=" rounded border-[0.3px]  border-teal-950 p-9 max-w-md mx-auto mt-10"
      >
        <div className="flex items-center ">
          <h1 className=" md:text-2xl  text-xl font-fontfamily5 font-semibold  text-blue-800">
            Create an account to get started
          </h1>
        </div>
        <p className="font-fontfamily5 text-lg text-gray-400  my-4 ">Sign in</p>

        {/* <Forminput
          label="Username"
          type="text"
          id="username"
          value={username}
          setValue={setUsername}
        /> */}
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
          className="bg-blue-800 my-4 hover:bg-blue-700 text-white font-fontfamily5 w-full py-2 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>
        {error && (
          <div className="error border border-red-600 text-center p-3 font-light text-white">
            {error}
          </div>
        )}
        {/* </Link> */}
        <p className="font-fontfamily5 mt-3 text-gray-400  text-sm">
          Already have an account?
          <Link to="/login" className="text-blue-600 mx-2 underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
