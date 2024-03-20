import { useLogout } from "../pages/AuthPages/useLogout";
const Logout = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div className="flex justify-end ">
      <button
        onClick={handleClick}
        className="bg-blue-200 py-1 px-4 text-black font-fontfamily5 font-semibold rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
