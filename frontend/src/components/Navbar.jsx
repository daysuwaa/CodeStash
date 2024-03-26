// import { Link, useLocation } from "react-router-dom";
// import { useLogout } from "../pages/AuthPages/useLogout";
// import { useAuthContext } from "../pages/AuthPages/useAuthContext";
// import Themes from "./Themes";

// const Navbar = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();
//   const location = useLocation();

//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <header>
//       <div className="mx-3 md:mx-9">
//         <div className="mt-[1.5rem] mb-4 flex items-center ">
//           <h1 className="font-fontfamily3 md:text-4xl text-3xl font-bold">
//             <span className="bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:to-lime-400 bg-gradient-to-r from-black to-lime-400 ">
//               CodeStash
//             </span>
//           </h1>

//           <nav className=" flex items-center ml-auto">
//             <Themes />
//             {user && (
//               <div>
//                 <span className="font-fontfamily5 text-lg font-semibold  dark:text-gray-400">
//                   {user.username}
//                 </span>
//                 <button
//                   onClick={handleClick}
//                   className="border-2 border-black dark:border-slate-300 px-4 py-1.5 ml-4 rounded text-sm font-fontfamily5"
//                 >
//                   Log out
//                 </button>
//               </div>
//             )}
//             {!user && (
//               <div className="font-fontfamily5 font-gray-300  ">
//                 <Link
//                   to="/login"
//                   className={
//                     location.pathname === "/login" ? "active-link" : ""
//                   }
//                   style={{ marginRight: "1rem" }}
//                 >
//                   {/* Login */}
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className={
//                     location.pathname === "/signup" ? "active-link" : ""
//                   }
//                 >
//                   {/* Signup */}
//                 </Link>
//               </div>
//             )}
//           </nav>
//         </div>
//       </div>
//       <hr className="h-[0.1px] border-gray-900 hidden md:block"></hr>
//       {/* <hr className="h-[0.1px] border-gray-900"></hr> */}
//     </header>
//   );
// };

// export default Navbar;

// Logo.js

const Navbar = () => {
  return (
    <h1 className="font-fontfamily3 md:text-4xl text-3xl font-bold">
      <span className="bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:to-lime-400 bg-gradient-to-r from-black to-lime-400">
        CodeStash
      </span>
    </h1>
  );
};

export default Navbar;
