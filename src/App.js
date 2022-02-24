import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {useEffect, useState} from "react";
import axios from "axios";

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
    const [google, setGoogle] = useState();

    useEffect(() => {
        const loadGoogle = async () => {
            const {data} = await axios.get('https://accounts.google.com/gsi/client');
            setGoogle(data);
        }
        loadGoogle();

    }, []);


    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
    }
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: "915033900039-bdlfua16lgflief48fks1e5u4e6b44u4.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            {theme: "outline", size: "large"}  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Container maxWidth={"md"}>
                <HomePage/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
