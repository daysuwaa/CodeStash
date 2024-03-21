/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import CopyToClipboard from "../../components/Copy";

const CodeModal = ({ code, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-70   overflow-auto top-0 pt-5  left-0 right-0 bottom-0   z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div className=" max-h-[99%] mx-5 overflow-y-auto">
        <div
          onClick={(event) => event.stopPropagation()}
          className="w-[400px] md:w-[600px] max-w-full md:mx-0 font-fontfamily5 text-blue-950 bg-white rounded-xl p-4 flex flex-col relative"
        >
          <AiOutlineClose
            className="absolute right-6 text-3xl text-gray-800 cursor-pointer"
            onClick={onClose}
          />
          <h2 className="w-fit px-4 py-1 text-white bg-[#1f1541] rounded-lg">
            {code.language}
          </h2>
          <div className="flex justify-start items-center gap-x- mt-2">
            <h2 className="my-1 ">
              <span className="font-semibold">Label :</span> {code.title}
            </h2>
          </div>
          <div className="my-2">
            <span className=" mr-3 text-blue-950 font-semibold">
              Created At:
            </span>
            <span>{new Date(code.createdAt).toLocaleString()}</span>
          </div>
          <div className="">
            <span className=" mr-3 font-semibold text-blue-950  ">
              Updated At:
            </span>
            <span>{new Date(code.updatedAt).toLocaleString()}</span>
          </div>
          <div className=" mt-4 border-[1px] rounded border-blue-950  p-4">
            <div className="flex items-center">
              <p className="underline text-lg font-fontfamily5">
                Full CodeSnippet
              </p>
            </div>
            <p className="my-2">{code.code}</p>
            <CopyToClipboard textToCopy={code.code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeModal;
