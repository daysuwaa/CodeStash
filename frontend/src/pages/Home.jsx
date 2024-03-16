import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import CodeTable from "./Home/CodeTable";
import CodeCards from "./Home/CodeCards";

const Home = () => {
  const [codeList, setCodeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/codes")
      .then((res) => {
        setCodeList(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x">
        <button
          className="bg-teal-500 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-teal-500 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Code List</h1>
        <Link to="/codes/add">
          <AiOutlinePlus className="text-teal-500 text-2xl border rounded-full bg-white" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <CodeTable codeList={codeList} />
      ) : (
        <CodeCards codeList={codeList} />
      )}
    </div>
  );
};

export default Home;
