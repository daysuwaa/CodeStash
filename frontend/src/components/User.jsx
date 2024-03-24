import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../pages/AuthPages/useLogout";
import { MdOutlineLogout } from "react-icons/md";
import { useAuthContext } from "../pages/AuthPages/useAuthContext";
import Themes from "./Themes";
import Navbar from "./Navbar";

const User = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="mx-5 ">
      <nav className="mt-9">
        {user && (
          <div>
            <div className="flex items-center">
              <Navbar />
              <div className="flex ml-auto items-center ">
                <Themes />
                <button
                  onClick={handleClick}
                  className="hidden md:block border-2  border-black  dark:border-slate-300 px-4 py-1.5 ml-auto rounded text-md font-fontfamily5"
                >
                  Log out
                </button>
                <MdOutlineLogout
                  className="md:hidden mb-1 w-[2rem] h-[2rem]"
                  onClick={handleClick}
                />
              </div>
            </div>
            <div>
              <span className="font-fontfamily5 sm:flex mt-9 md:text-3xl dark:text-gray-300">
                <p className="font-customfont mt-9 sm:mt-0 text-2xl">
                  Welcome Back,{" "}
                </p>
                <p className="sm:ml-2 text-2xl font-customfont font-semibold">
                  {user.username} 👋🏾
                </p>
              </span>
            </div>
          </div>
        )}
        {!user && (
          <div className="font-fontfamily5 font-gray-300">
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active-link" : ""}
              style={{ marginRight: "1rem" }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={location.pathname === "/signup" ? "active-link" : ""}
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default User;
