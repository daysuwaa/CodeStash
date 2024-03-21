import { useState, useEffect } from "react";
import { MdOutlineWbSunny, MdNightlight } from "react-icons/md";

const Themes = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="mr-2 inline-block relative">
        <button
          className={`h-8 w-[60px] rounded-3xl flex items-center justify-center ${
            theme === "dark"
              ? "bg-gray-300 justify-end"
              : "bg-[#060117] justify-start"
          } focus:outline-none transition duration-300 ease-in-out`}
          onClick={handleThemeChange}
        >
          {theme === "dark" ? (
            <MdOutlineWbSunny className="text-white h-7 w-7 p-1.5 bg-[#060117] mr-[0.8px] flex ml-auto rounded-full" />
          ) : (
            <MdNightlight className="text-gray-400 rounded-full mr-auto  w-7 p-1.5 bg-white ml-[1px]  h-7" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Themes;
