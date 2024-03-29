import { useState, useEffect } from "react";
import { MdOutlineWbSunny, MdNightlight } from "react-icons/md";

const Themes = () => {
  // Load the theme preference from localStorage, default to "light" if not found
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Update the document body class based on the theme
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }

    // Save the theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    // Toggle the theme between "light" and "dark"
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="">
        <button
          className={`md:w-[55px] mx-2 rounded-3xl sm:flex items-center justify-center ${
            theme === "dark"
              ? "bg-gray-300 justify-end "
              : "bg-[#060117] justify-start"
          } focus:outline-none transition duration-300 ease-in-out`}
          onClick={handleThemeChange}
        >
          {theme === "dark" ? (
            <MdOutlineWbSunny className="text-lime-600 rounded-full ml-auto w-[2rem] h-[2rem] md:h-7 md:w-7  p-1.5 md:bg-white " />
          ) : (
            <MdNightlight className="text-gray-400 rounded-full mr-auto w-[2rem] h-[2rem] md:h-7 md:w-7  p-1.5 md:bg-white    " />
          )}
        </button>
      </div>
    </div>
  );
};

export default Themes;

// import { useState, useEffect } from "react";
// import { MdOutlineWbSunny, MdNightlight } from "react-icons/md";

// export const Themes = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     if (theme === "light") {
//       document.body.classList.remove("dark");
//     } else {
//       document.body.classList.add("dark");
//     }
//   }, [theme]);

//   const handleThemeChange = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div>
//       <div className="mr-2 inline-block relative">
//         <button
//           className={`h-8 w-[60px] rounded-3xl flex items-center justify-center ${
//             theme === "dark"
//               ? "bg-gray-300 justify-end"
//               : "bg-[#060117] justify-start"
//           } focus:outline-none transition duration-300 ease-in-out`}
//           onClick={handleThemeChange}
//         >
//           {theme === "dark" ? (
//             <MdOutlineWbSunny className="text-white h-7 w-7 p-1.5 bg-[#060117] mr-[0.8px] flex ml-auto rounded-full" />
//           ) : (
//             <MdNightlight className="text-gray-400 rounded-full mr-auto  w-7 p-1.5 bg-white ml-[1px]  h-7" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Themes;
