import { StyledEngineProvider } from "@mui/material";


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <h1>My App</h1>
      </div>
    </StyledEngineProvider>
  );
}

export default App;