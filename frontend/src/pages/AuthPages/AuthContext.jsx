/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { createContext, useReducer, useEffect } from "react";

// export const AuthContext = createContext();

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//   });
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user) {
//       dispatch({ type: "LOGIN", payload: user });
//     }
//   }, []);
//   // useEffect(() => {
//   //   const userData = localStorage.getItem("user");

//   //   if (userData) {
//   //     try {
//   //       const user = JSON.parse(userData);
//   //       dispatch({ type: "LOGIN", payload: user });
//   //     } catch (error) {
//   //       console.error("Error parsing user data:", error);
//   //     }
//   //   }
//   // }, []);

//   console.log("AuthContext state:", state);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (user) {
  //     dispatch({ type: "LOGIN", payload: user });
  //   }
  // }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
