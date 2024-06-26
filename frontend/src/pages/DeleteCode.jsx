import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "./AuthPages/useAuthContext";
import { baseUrl } from "../../Url";

const DeleteCode = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext();

  const handleDeleteCode = () => {
    if (!user) {
      return;
    }

    setLoading(true);
    axios
      .delete(`${baseUrl}/codes/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Stash deleted successfully", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
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
    <div className="font-fontfamily5">
      {/* <Navbar /> */}
      <div className="flex items-center mt-9 mb-5">
        <BackButton />
        <h1 className="text-xl text-center mx-[3rem] md:mx-auto  font-fontfamily5">
          Delete Code Snippet
        </h1>
      </div>

      <div className="flex flex-col  mt-[10rem] md:mt-[6rem] items-center border border-black dark:border-slate-700 rounded w-[400px] pt-5 mx-auto">
        <h3 className="text-lg">Are you sure you want to delete this code</h3>
        <button
          className="py-2 px-5 bg-red-600 hover:bg-red-500 text-white text-sm m-5 rounded"
          onClick={handleDeleteCode}
        >
          {loading ? <Spinner /> : "Yes delete Code"}
        </button>
      </div>
    </div>
  );
};

export default DeleteCode;
