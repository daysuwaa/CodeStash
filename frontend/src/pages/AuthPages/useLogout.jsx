// import { useAuthContext } from "./useAuthContext";
// export const useLogout = () => {
//   const { dispatch } = useAuthContext();
//   const logout = () => {
//     //remove user from storage
//     localStorage.removeItem("user");

//     dispatch({ type: "LOGOUT" });
//   };

//   return { logout };
// };
import { useAuthContext } from "./useAuthContext";
// import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    // dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  };

  return { logout };
};
