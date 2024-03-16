import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
const AddCode = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCode = () => {
    const data = {
      title,
      code,
      language,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/codes`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Stash created succesfully", { variant: "success" });

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
      <h1 className="text-3xl my-4"> Create Code</h1>
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
        <button className="p-2 bg-teal-500" onClick={handleSaveCode}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddCode;
