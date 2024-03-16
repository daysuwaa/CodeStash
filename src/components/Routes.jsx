import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "/src/components/Home.jsx";
import Signin from "./Signin";
import Login from "./Login";
import Forgotpassword from "./Forgottenpassword";
import Stashed from "./Stashed";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/fpass" element={<Forgotpassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stashed" element={<Stashed />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
