// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthContext } from "./pages/AuthPages/useAuthContext";
// import Home from "./pages/Home";
// import AddCode from "./pages/AddCode";
// import Stash from "./pages/Stash";
// import EditCode from "./pages/EditCode";
// import DeleteCode from "./pages/DeleteCode";
// import Signup from "./pages/AuthPages/Signin";
// import Login from "./pages/AuthPages/Login";
// import Navbar from "./components/Navbar";
// import Getstarted from "./pages/Getstarted";
// // import Forgotpassword from "./pages/AuthPages/ForgottenPassword";
// const App = () => {
//   const { user } = useAuthContext();
//   return (
//     <div>
//       <Route>
//         <Route exact path="/getstarted" element={<Getstarted />} />
//       </Route>
//       <Navbar />
//       <Routes>
//         {/* <Route exact path="/getstarted" element={<Getstarted />} /> */}
//         <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/codes/add" element={<AddCode />} />
//         <Route path="/codes/details/:id" element={<Stash />} />
//         <Route path="/codes/edit/:id" element={<EditCode />} />
//         <Route path="/codes/delete/:id" element={<DeleteCode />} />
//         <Route
//           path="/signup"
//           element={!user ? <Signup /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/login"
//           element={!user ? <Login /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthContext } from "./pages/AuthPages/useAuthContext";
// import Home from "./pages/Home";
// import AddCode from "./pages/AddCode";
// import Stash from "./pages/Stash";
// import EditCode from "./pages/EditCode";
// import DeleteCode from "./pages/DeleteCode";
// import Signup from "./pages/AuthPages/Signin";
// import Login from "./pages/AuthPages/Login";
// import Navbar from "./components/Navbar";
// import Getstarted from "./pages/Getstarted";
// // import Forgotpassword from "./pages/AuthPages/ForgottenPassword";

// const App = () => {
//   const { user } = useAuthContext();

//   return (
//     <div>
//       <Routes>
//         <Route exact path="/getstarted" element={<Getstarted />} />
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/"
//           element={
//             user ? (
//               <>
//                 <Navbar /> <Home />
//               </>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//         <Route path="/codes/add" element={<AddCode />} />
//         <Route path="/codes/details/:id" element={<Stash />} />
//         <Route path="/codes/edit/:id" element={<EditCode />} />
//         <Route path="/codes/delete/:id" element={<DeleteCode />} />
//         <Route
//           path="/signup"
//           element={!user ? <Signup /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/login"
//           element={!user ? <Login /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthContext } from "./pages/AuthPages/useAuthContext";
// import Home from "./pages/Home";
// import AddCode from "./pages/AddCode";
// import Stash from "./pages/Stash";
// import EditCode from "./pages/EditCode";
// import DeleteCode from "./pages/DeleteCode";
// import Signup from "./pages/AuthPages/Signin";
// import Login from "./pages/AuthPages/Login";
// // import Navbar from "./components/Navbar";
// import Getstarted from "./pages/Getstarted";

// const App = () => {
//   const { user } = useAuthContext();

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route exact path="/getstarted" element={<Getstarted />} />
//         <Route path="/codes/add" element={<AddCode />} />
//         <Route path="/codes/details/:id" element={<Stash />} />
//         <Route path="/codes/edit/:id" element={<EditCode />} />
//         <Route path="/codes/delete/:id" element={<DeleteCode />} />
//         <Route
//           path="/signup"
//           element={!user ? <Signup /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/login"
//           element={!user ? <Login /> : <Navigate to="/" />}
//         />
//         <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthContext } from "./pages/AuthPages/useAuthContext";
// import Home from "./pages/Home";
// import AddCode from "./pages/AddCode";
// import Stash from "./pages/Stash";
// import EditCode from "./pages/EditCode";
// import DeleteCode from "./pages/DeleteCode";
// import Signup from "./pages/AuthPages/Signin";
// import Login from "./pages/AuthPages/Login";
// import Navbar from "./components/Navbar";
// import Getstarted from "./pages/Getstarted";

// const App = () => {
//   const { user } = useAuthContext();

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route exact path="/getstarted" element={<Getstarted />} />
//         <Route path="/codes/add" element={<AddCode />} />
//         <Route path="/codes/details/:id" element={<Stash />} />
//         <Route path="/codes/edit/:id" element={<EditCode />} />
//         <Route path="/codes/delete/:id" element={<DeleteCode />} />
//         <Route
//           path="/signup"
//           element={!user ? <Signup /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/login"
//           element={!user ? <Login /> : <Navigate to="/" />}
//         />
//         <Route path="/" element={user ? <Home /> : <Navigate to="/`   " />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./pages/AuthPages/useAuthContext";
import Home from "./pages/Home";
import AddCode from "./pages/AddCode";
import Stash from "./pages/Stash";
import EditCode from "./pages/EditCode";
import DeleteCode from "./pages/DeleteCode";
import Signup from "./pages/AuthPages/Signin";
import Login from "./pages/AuthPages/Login";
// import Getstarted from "./pages/Getstarted";

const App = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <Routes>
        {/* <Route exact path="/getstarted" element={<Getstarted />} /> */}
        <Route path="/codes/add" element={<AddCode />} />
        <Route path="/codes/details/:id" element={<Stash />} />
        <Route path="/codes/edit/:id" element={<EditCode />} />
        <Route path="/codes/delete/:id" element={<DeleteCode />} />
        <Route
          exact
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthContext } from "./pages/AuthPages/useAuthContext";
// import Home from "./pages/Home";
// import AddCode from "./pages/AddCode";
// import Stash from "./pages/Stash";
// import EditCode from "./pages/EditCode";
// import DeleteCode from "./pages/DeleteCode";
// import Signup from "./pages/AuthPages/Signin";
// import Login from "./pages/AuthPages/Login";
// // import Getstarted from "./pages/Getstarted";

// const App = () => {
//   const { user } = useAuthContext();

//   return (
//     <div>
//       <Routes>
//         {/* <Route exact path="/getstarted" element={<Getstarted />} /> */}
//         <Route path="/codes/add" element={<AddCode />} />
//         <Route path="/codes/details/:id" element={<Stash />} />
//         <Route path="/codes/edit/:id" element={<EditCode />} />
//         <Route path="/codes/delete/:id" element={<DeleteCode />} />
//         <Route
//           path="/signup"
//           element={!user ? <Signup /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/login"
//           element={!user ? <Login /> : <Navigate to="/" />}
//         />
//         <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
