import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";

const theme = createTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#fff"
        },
        primaryLight: {
            main: "#757ce8",
            contrastText: "#000"
        },
        primaryDark: {
            main: "#002884",
            contrastText: "#fff"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
});


function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Container maxWidth={"md"}>
                <Routes>
                    <Route exact path={'/'} element={<HomePage/>}/>
                    <Route path={'/login'} element={<SignIn/>}/>
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
