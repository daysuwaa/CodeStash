import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const Stash = () => {
  const [code, setCode] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/codes/${id}`)
      .then((res) => {
        setCode(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Add id as a dependency for useEffect to re-run when id changes

  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4">Show code</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-teal-500 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">id:</span>
            <span>{code._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title:</span>
            <span>{code.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Code:</span>
            <span>{code.code}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Language:</span>
            <span>{code.language}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Created At:</span>
            <span>{new Date(code.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Updated At:</span>
            <span>{new Date(code.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stash;
