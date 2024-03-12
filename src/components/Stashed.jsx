import Navbar from "./Navbar";

export default function Stashed() {
  return (
    <div>
      <Navbar />
      <form className="flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search for your code.."
          name="search"
          className="text-sm font-fontfamily5 w-full mt-[4rem] mx-[5rem] md:mx-[20rem] px-2 py-2 rounded bg-black border   border-teal-500   focus:outline-none focus:border-teal-300 focus:shadow-outline leading-tight focus-within:border-teal-500  text-white"
        />
      </form>
    </div>
  );
}
