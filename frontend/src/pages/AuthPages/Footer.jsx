import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="md:hidden fixed bottom-0 dark:bg-white bg-black text-white left-0 w-full flex justify-center  ">
        <div className="md:hidden mx-3 rounded-full border-2 border-transparent justify-end flex">
          <div className="rounded-full border-4 border-lime-500 flex justify-end ">
            <div className="rounded-full border-1 bg-black w-full">
              <Link to="/codes/add">
                <AiOutlinePlus className="dark:text-gray-300 text-4xl bg-transparent rounded-full border-white border-[3px] hover:border-[1px] p-1 md:p-2 hover:p-0 hover:scale-125 duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
