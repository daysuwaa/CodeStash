import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
const EditCode = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/codes/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setCode(res.data.code);
        setLanguage(res.data.language);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("An error happened , please check the console");
      });
  }, [id]);

  const handleEditCode = () => {
    const data = {
      title,
      code,
      language,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/codes/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Stash edited succesfully", { variant: "success" });
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
      <BackButton />
      <h1 className="text-3xl my-4">Edit Code</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-teal-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500"> Title</label>
          <input
            type="text"
            className="border border-slate-700 rounded-md w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500"> Code</label>
          <input
            type="text"
            className="border border-slate-700 rounded-md w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500"> Language</label>
          <input
            type="text"
            className="border border-slate-700 rounded-md w-full"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <button className="p-2 bg-teal-500" onClick={handleEditCode}>
          save
        </button>
      </div>
    </div>
  );
};

export default EditCode;
