// Import the useLogout hook from the appropriate location
// import { Link } from "react-router-dom";
// import { useLogout } from "../pages/AuthPages/useLogout";

// const Logout = () => {
//   const { logout } = useLogout();
//   const handleClick = () => {
//     logout();
//   };
//   return (
//     <div className="flex justify-end">
//       <Link to="/login">
//         <button
//           onClick={handleClick}
//           className="bg-blue-200 py-1 px-4 text-black font-fontfamily5 font-semibold rounded"
//         >
//           Logout
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Logout;

import { useLogout } from "../pages/AuthPages/useLogout";
import { Link } from "react-router-dom";
const Logout = () => {
  const { logout } = useLogout();

  return (
    <div className="flex justify-end">
      <Link to="/login">
        <button
          onClick={logout} // Call logout directly on button click
          className="bg-blue-200 py-1 px-4 text-black font-fontfamily5 font-semibold rounded"
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Logout;

// import { useState } from "react";
// import { Redirect } from "react-router-dom";
// import { useLogout } from "../pages/AuthPages/useLogout";

// const Logout = () => {
//   const [loggedOut, setLoggedOut] = useState(false);
//   const { logout } = useLogout();

//   const handleClick = async () => {
//     await logout();
//     setLoggedOut(true); // Set loggedOut state to true after logout
//   };

//   if (loggedOut) {
//     return <Redirect to="/login" />; // Redirect to login page after logout
//   }

//   return (
//     <div className="flex justify-end">
//       <button
//         onClick={handleClick}
//         className="bg-blue-200 py-1 px-4 text-black font-fontfamily5 font-semibold rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;
