import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAuthContext } from "./AuthPages/useAuthContext";
import { baseUrl } from "../../Url";

const EditCode = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const textAreaRef = useRef(null);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCode = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/codes/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const { title, code, language } = response.data;
        setTitle(title);
        setCode(code);
        setLanguage(language);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        // Handle error fetching code
      }
    };
    fetchCode();
  }, [id, user.token]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [code]);
  const handleEditCode = () => {
    if (!user) {
      enqueueSnackbar("Please log in to Edit code.", {
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
      .put(`${baseUrl}/codes/${id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Stash edited successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" mt-9">
        <BackButton />
      </div>
      <h1 className="text-2xl text-center mx-auto font-fontfamily5">
        Edit CodeSnippet
      </h1>

      <div className="flex flex-col border-[1px] border-gray-500 mt-[5rem] rounded w-[350px] md:w-[600px] py-5 mx-auto">
        <div className="grid md:grid-cols-2 mx-4 gap-4 ">
          <label className="text-[15px] font-fontfamily5 dark:text-gray-300">
            Label :
            <input
              type="text"
              className="border dark:border-gray-300 border-black bg-transparent rounded px-3 py-1.5 mt-2 w-full focus:outline-none focus:border-lime-900 focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="text-[15px] font-fontfamily5 dark:text-gray-300">
            Programming Language :
            <input
              type="text"
              className="border border-black dark:border-gray-300 bg-transparent rounded px-3 py-1.5 mt-2 w-full focus:outline-none focus:border-lime-900 focus:shadow-outline "
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </label>
        </div>
        <div className="mx-4 mt-2">
          <label className="text-[15px] font-fontfamily5 dark:text-gray-300">
            Code :
            <textarea
              className="border resize-none bg-transparent overflow-hidden border-gray-300 dark:border-gray-300 px-3 py-2 mt-2 w-full rounded mb-3 focus:outline-none focus:border-lime-900 focus:shadow-outline "
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows="1"
              ref={textAreaRef}
            ></textarea>
          </label>
        </div>

        <button
          className="mx-4 py-2 rounded hover:bg-lime-600 bg-lime-500 font-fontfamily5 text-black"
          onClick={handleEditCode}
        >
          {loading ? <Spinner /> : "  Save CodeSnippet to Stash"}
        </button>
      </div>
    </div>
  );
};

export default EditCode;
