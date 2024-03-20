/* eslint-disable no-unused-vars */
// import * as React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// export default function Spinner() {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CircularProgress />
//     </Box>
//   );
// }
/* eslint-disable no-unused-vars */
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center the spinner horizontally
        alignItems: "center", // Center the spinner vertically
        height: "100vh", // Set height to full viewport height
      }}
    >
      <CircularProgress />
    </Box>
  );
}
