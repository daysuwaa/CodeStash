import { IoCodeSlash } from "react-icons/io5";
import { Link } from "react-router-dom";
import Themes from "../components/Themes";
const Getstarted = () => {
  return (
    <div>
      <div className="ml-auto flex justify-end mt-[2rem]">
        <Themes />
      </div>
      <div className="mt-[8rem]">
        <IoCodeSlash className=" dark:text-lime-400 text-center mx-auto w-[13rem] mt-[3rem] h-[13rem] " />
      </div>
      <div className="text-left mt-[5rem] mx-8">
        <p className=" text-3xl font-extralight dark:text-gray-300  my-4 ">
          Code stash helps you{" "}
          <span className="font-semibold text-lime-400">keep track</span> of
          your code snippets.
        </p>
        <Link to="/signup">
          <button className="bg-lime-400 w-full py-4 rounded mt-[3rem] text-black font-fontfamily5 text-lg font-bold">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Getstarted;
