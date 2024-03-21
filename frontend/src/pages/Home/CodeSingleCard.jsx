/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
// import { CiStickyNote } from "react-icons/ci";
import { LuStickyNote } from "react-icons/lu";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import CodeModal from "./CodeModal";

const CodeSingleCard = ({ code }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={code._id}
      className="border-[0.5px] shadow-lg  text-gray-600  bg-lime-400  shadow-slate-600 font-fontfamily5 border-gray-800  rounded-lg px-4 py-2 m-4 relative "
    >
      <div className="flex justify-start items-center mt-4 gap-x-3">
        <LuStickyNote className="text-gray-600 ml-4  text-2xl" />
        <h2 className="my-1 font-semibold">{code.title}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-3">
        <IoCodeSlashSharp className=" ml-4 text-2xl" />
        <h2 className="my-1 font-semibold">{code.language}</h2>
      </div>

      <div className="flex justify-start ml-4 items-center gap-6 mt-2 py-3">
        <BiShow
          className="text-2xl  hover:text-blue-700  cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/codes/edit/${code._id}`}>
          <AiOutlineEdit className="text-2xl   hover:text-green-700" />
        </Link>
        <Link to={`/codes/delete/${code._id}`}>
          <MdOutlineDelete className="text-2xl  hover:text-red-700" />
        </Link>
      </div>

      {showModal && (
        <CodeModal code={code} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CodeSingleCard;
