import { StyledEngineProvider } from "@mui/material";
import Router from "./Router";


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
      <Router />
      </div>
    </StyledEngineProvider>
  );
}

export default App;