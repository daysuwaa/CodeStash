import { useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const isActive = (pathname) => location.pathname === pathname;
  return (
    <div className="flex items-center m-7  font-fontfamily5">
      <h1 className="font-fontfamily3 md:text-5xl text-3xl  font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-500">
          CodeStash
        </span>
      </h1>
      <div className="flex items-center text-sm  mx-auto gap-6">
        <a
          href="/home"
          className={`hover:text-teal-500 ${
            isActive("/home") ? "border-b-4 border-teal-700" : "text-white"
          }`}
        >
          Home
        </a>
        <a
          href="/stashed"
          className={`  hover:text-teal-500 ${
            isActive("/stashed") ? "border-b-4 border-teal-700" : "text-white"
          }`}
        >
          Stashed
        </a>
      </div>
      <div>
        <a
          href="/login"
          className="hover:underline text-sm hover:text-teal-500"
        >
          Log out
        </a>
      </div>
    </div>
  );
}
