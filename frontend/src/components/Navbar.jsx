// // import { useAuthContext } from "../pages/AuthPages/useAuthContext";
// const Navbar = () => {
//   // const { user } = useAuthContext();
//   return (
//     <div className="mt-[3rem] flex justify-center">
//       <h1 className="font-fontfamily3 md:text-5xl text-4xl font-bold">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-700">
//           CodeStash
//         </span>
//         {/* <span>{user.email}</span> */}
//       </h1>
//     </div>
//   );
// };

// export default Navbar;
// import { Link } from "react-router-dom";
// import { useLogout } from "../pages/AuthPages/useLogout";
// import { useAuthContext } from "../pages/AuthPages/useAuthContext";

// const Navbar = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <header>
//       <div className="mx-9">
//         <div className="mt-[1.5rem] mb-4 flex items-center ">
//           <h1 className="font-fontfamily3 md:text-4xl text-3xl font-bold">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-700">
//               CodeStash
//             </span>
//           </h1>

//           <nav className=" flex ml-auto">
//             {user && (
//               <div>
//                 <span className="font-fontfamily5 text-lg font-bold  text-gray-400">
//                   {user.username}
//                 </span>
//                 <button
//                   onClick={handleClick}
//                   className="border px-4 py-1.5 ml-4 rounded text-xs font-fontfamily5"
//                 >
//                   Log out
//                 </button>
//               </div>
//             )}
//             {!user && (
//               <div className="font-fontfamily5 font-gray-300 ">
//                 <Link to="/login" className="mx-3">
//                   Login
//                 </Link>
//                 <Link to="/signup">Signup</Link>
//               </div>
//             )}
//           </nav>
//         </div>
//       </div>
//       <hr className="h-[0.1px] border-gray-900"></hr>
//     </header>
//   );
// };

// export default Navbar;
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../pages/AuthPages/useLogout";
import { useAuthContext } from "../pages/AuthPages/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="mx-9">
        <div className="mt-[1.5rem] mb-4 flex items-center ">
          <h1 className="font-fontfamily3 md:text-4xl text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-700">
              CodeStash
            </span>
          </h1>

          <nav className=" flex ml-auto">
            {user && (
              <div>
                <span className="font-fontfamily5 text-lg font-bold  text-gray-400">
                  {user.username}
                </span>
                <button
                  onClick={handleClick}
                  className="border px-4 py-1.5 ml-4 rounded text-xs font-fontfamily5"
                >
                  Log out
                </button>
              </div>
            )}
            {!user && (
              <div className="font-fontfamily5 font-gray-300  ">
                <Link
                  to="/login"
                  className={
                    location.pathname === "/login" ? "active-link" : ""
                  }
                  style={{ marginRight: "1rem" }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={
                    location.pathname === "/signup" ? "active-link" : ""
                  }
                >
                  Signup
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
      <hr className="h-[0.1px] border-gray-900"></hr>
    </header>
  );
};

export default Navbar;
