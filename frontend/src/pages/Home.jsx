import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import CodeCards from "./Home/CodeCards";
import Navbar from "../components/Navbar";

// import Logout from "../components/Logout";

const Home = () => {
  const [codeList, setCodeList] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <Navbar />
      {/* <Logout /> */}

      <div className="flex justify-between items-center">
        <h1 className=" text-lg md:text-xl my-5 font-fontfamily5 text-center mx-auto">
          CodeSnippets
        </h1>
        {/* on sm screens */}
        <div className="md:hidden rounded-full border-2 border-transparent justify-end flex">
          <div className="rounded-full border-4 border-blue-950 flex justify-end ">
            <div className="rounded-full border-1  w-full">
              <Link to="/codes/add">
                <AiOutlinePlus className="text-gray-300 text-4xl bg-transparent rounded-full border-white border-[3px] hover:border-[1px] p-1 md:p-2 hover:p-0 hover:scale-125 duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <CodeCards
          codeList={codeList}
          className="text-center justify-center flex"
        />
      )}
      {/* on md screens */}
      <div className="hidden rounded-full border-2 border-transparent justify-end md:flex bottom-10 fixed right-10 ">
        <div className="rounded-full border-2 border-white flex justify-end ">
          <div className="rounded-full border-4 border-blue-950 flex justify-end ">
            <div className="rounded-full border-2  w-full">
              <Link to="/codes/add">
                <AiOutlinePlus className="text-gray-300 md:text-5xl bg-transparent rounded-full border-white border-[3px] hover:border-[1px] p-1 md:p-2 hover:p-0 hover:scale-125 duration-300 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
