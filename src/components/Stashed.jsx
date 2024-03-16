import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const Stashed = ({ id, code, description, type }) => {
  return (
    <div>
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
        <BiEditAlt />
        <BsTrash />
        <div className="text-white">
          <p>{id}</p>
          <p>{code}</p>
          <p>{description}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};
Stashed.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Stashed;
