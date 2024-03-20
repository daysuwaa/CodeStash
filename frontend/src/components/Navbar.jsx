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
import { Link } from "react-router-dom";
import { useLogout } from "../pages/AuthPages/useLogout";
import { useAuthContext } from "../pages/AuthPages/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="mt-[3rem] flex justify-center">
            <h1 className="font-fontfamily3 md:text-5xl text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-700">
                CodeStash
              </span>
            </h1>
          </div>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.username}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signin">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
