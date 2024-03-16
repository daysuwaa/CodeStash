import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCode from "./pages/AddCode";
import Stash from "./pages/Stash";
import EditCode from "./pages/EditCode";
import DeleteCode from "./pages/DeleteCode";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codes/add" element={<AddCode />} />
        <Route path="/codes/details/:id" element={<Stash />} />
        <Route path="/codes/edit/:id" element={<EditCode />} />
        <Route path="/codes/delete/:id" element={<DeleteCode />} />
      </Routes>
    </div>
  );
};

export default App;
