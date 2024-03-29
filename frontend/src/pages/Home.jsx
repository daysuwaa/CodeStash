import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import CodeCards from "./Home/CodeCards";
import { useAuthContext } from "./AuthPages/useAuthContext";
import User from "../components/User";
import Footer from "./AuthPages/Footer";

const Home = () => {
  const [codeList, setCodeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCodes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://codestashbe.onrender.com/codes",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setCodeList(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (user) {
      fetchCodes();
    } else {
      // Reset codeList if user is not logged in
      setCodeList([]);
    }
  }, [user]);

  return (
    <div className="">
      <User />
      <div className="flex justify-between items-center">
        <h1 className="text-xl  md:text-2xl mb-5 mt-[3rem] font-fontfamily5 text-center mx-auto">
          CodeSnippets
        </h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <CodeCards
          codeList={codeList}
          className="text-center justify-center flex"
        />
      )}
      <div>
        <div className="hidden rounded-full border-2 border-transparent justify-end md:flex bottom-2 fixed right-10 ">
          <div className="rounded-full border-4 border-blue-950 flex justify-end ">
            <div className="rounded-full border-4 border-white flex justify-end ">
              <div className="rounded-full border-4  border-blue-950  w-full">
                <Link to="/codes/add">
                  <AiOutlinePlus className="dark:text-gray-300 md:text-5xl bg-transparent rounded-full border-white border-[3px] hover:border-[1px] p-1 md:p-2 hover:p-0 hover:scale-125 duration-300 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
