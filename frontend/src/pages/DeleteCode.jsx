import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCode = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteCode = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/codes/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Stash deleted succesfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-8">Delete Code</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col items-center border-2 bordder-teal-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete thos code</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-fulll"
          onClick={handleDeleteCode}
        >
          yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteCode;
