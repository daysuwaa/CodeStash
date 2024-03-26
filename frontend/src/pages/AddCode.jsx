import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAuthContext } from "../pages/AuthPages/useAuthContext"; // Import the authentication context
import { baseUrl } from "../../Url";

const AddCode = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const textAreaRef = useRef(null);
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext(); // Access the user from the authentication context

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [code]);

  const handleSaveCode = () => {
    if (!user) {
      // Check if user is logged in
      enqueueSnackbar("Please log in to add code.", {
        variant: "error",
        autoHideDuration: 2000,
      });
      return;
    }

    const data = {
      title,
      code,
      language,
    };

    setLoading(true);
    axios
      .post(`${baseUrl}/codes/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Code Stash created successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error Creating Code Stash", {
          variant: "error",
          autoHideDuration: 2000,
        });
        console.log(error);
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex items-center mt-9 mb-5">
        <BackButton />
        <h1 className="text-2xl text-center mx-[3rem] md:mx-auto  font-fontfamily5">
          Add CodeSnippet to Stash
        </h1>
      </div>
      {/* {loading && <Spinner />} */}
      <div className="flex flex-col border-[1px] border-gray-500 rounded w-[350px] md:w-[600px] py-5  mx-auto">
        <div className="grid md:grid-cols-2 mx-4 gap-4 ">
          <label className="text-[15px] font-fontfamily5 text-gray-300 ">
            Label :
            <input
              type="text"
              className="border border-gray-300 bg-transparent rounded px-3 py-1.5 mt-2 w-full focus:outline-none  focus:border-lime-900 focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="text-[15px] font-fontfamily5 text-gray-300">
            Programming Language :
            <input
              type="text"
              className="border border-gray-300 bg-transparent rounded px-3 py-1.5 mt-2 w-full focus:outline-none  focus:border-lime-900 focus:shadow-outline "
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </label>
        </div>
        <div className="mx-4 mt-2">
          <label className="text-[15px] font-fontfamily5  text-gray-300">
            Code :
            <textarea
              className="border resize-none bg-transparent overflow-hidden   border-gray-300  px-3 py-2 mt-2 w-full rounded mb-3 focus:outline-none focus:border-lime-900 focus:shadow-outline "
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows="1"
              ref={textAreaRef}
            ></textarea>
          </label>
        </div>

        <div className="relative mx-4">
          <button
            className="py-2 w-full rounded hover:bg-lime-600 bg-lime-500 font-fontfamily5 text-black"
            onClick={handleSaveCode}
          >
            {loading ? <Spinner /> : "  Save CodeSnippet to Stash"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCode;
