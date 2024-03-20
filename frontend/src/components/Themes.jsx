import { useState, useEffect } from "react";

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
      <button
        className="bg-red-300 p-4 rounded-3xl"
        onClick={handleThemeChange}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Themes;
