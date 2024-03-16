import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import { SlFolderAlt } from "react-icons/sl";

const Code = ({ isOpen, handleClose }) => {
  const textAreaRef = useRef(null);
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  const handleModalClose = () => {
    setCode("");
    setDescription("");
    handleClose();
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [code]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      shouldCloseOnOverlayClick={false}
      className="absolute rounded border-teal-500 top-1/2 w-[80%] md:w-[50%] md:left-[47%] lg:w-[40%] left-[42%] overflow-scroll   transform -translate-x-1/2 bg-black border -translate-y-1/2 p-[2rem] m-[2rem] max-h-[80%] "
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="mt-5">
        <div className="flex items-center   ">
          <h2 className="text-md mx-auto  font-fontfamily5">
            Add New Code to Stash
          </h2>
          <button onClick={handleModalClose} className="h-7 w-7">
            <IoCloseOutline className="h-7 w-7" />
          </button>
        </div>
        <hr className="border-teal-500 border-[0.1px] "></hr>
        <div className="my-6 font-fontfamily5">
          <form>
            <label
              htmlFor="codedescription"
              className="mr-auto text-sm pb-2 block"
            >
              Code description / Title
            </label>
            <input
              type="text"
              id="codedescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded w-full py-2 px-3 mt-2 border  border-teal-500  bg-black focus:outline-none focus:border-teal-300 focus:shadow-outline leading-tight "
            />
          </form>
          <form>
            <label htmlFor="addcode" className="mr-auto text-sm py-4 block">
              Add code
              <textarea
                className="border resize-none bg-black overflow-hidden   border-teal-500 rounded-md w-full my-2 text-sm font-fontfamily5 p-2 focus:outline-none focus:border-teal-300 focus:shadow-outline "
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows="1"
                ref={textAreaRef}
              ></textarea>
            </label>
          </form>
        </div>
      </div>
      <SlFolderAlt type="submit" className="flex ml-auto h-5 w-5" />
    </Modal>
  );
};

Code.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Code;
Code.js;
