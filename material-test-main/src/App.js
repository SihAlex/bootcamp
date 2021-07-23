import Header from "./components/Header";
import Main from "./scenes/main/Main";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#466D1D",
    },
    secondary: {
      main: "#6d1d46",
    },
    error: {
      main: "#db2d16",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
