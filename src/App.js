import './App.css';
import {
    AppBar,
    Button,
    Container,
    CssBaseline,
    Grid,
    InputAdornment,
    TextField,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import {useState} from "react";


const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        primaryLight: {
            main: '#757ce8',
            contrastText: '#000',
        },
        primaryDark: {
            main: '#002884',
            contrastText: '#fff',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function App() {
    const [kg, setKg] = useState(0);
    const [pound, setLbs] = useState(0);
    const [ounce, setOz] = useState(0);

    const handleInputChange = (e) => {
        const val = e.target.value;
        switch (e.target.name) {
            case 'kg':
                setKg(val);
                setLbs(val / 0.45359237);
                setOz(val / 0.02834952);
                break;
            case 'pound':
                setLbs(val);
                setKg(val * 0.45359237);
                setOz(val * 16);
                break;
            case 'ounce':
                setOz(val);
                setKg(val * 0.02834952);
                setLbs(val / 16);
                break;
            default:
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="static" color='primary' sx={{py: 1, mb: 5}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, fontWeight: 'bold'}}>
                        WeightConversion
                    </Typography>
                    <Button color="inherit"><Typography variant='h6'>Login</Typography></Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth={"md"}>
                <Grid container direction={"column"} justifyContent="center" spacing={4}>
                    <Grid item xs={12}/>

                    <Grid item xs={12}>
                        <TextField
                            onChange={handleInputChange}
                            value={kg}
                            name='kg'
                            fullWidth
                            autoFocus
                            variant={'outlined'}
                            color={'secondary'}
                            label={'Weight in Kg'}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} color={'primaryLight'}>
                        <TextField
                            onChange={handleInputChange}
                            value={pound}
                            name='pound'
                            fullWidth
                            variant={'outlined'}
                            color={'secondary'}
                            label={'Weight in Pounds'}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Lbs</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} color={'primaryLight'}>
                        <TextField
                            onChange={handleInputChange}
                            value={ounce}
                            name='ounce'
                            fullWidth
                            variant={'outlined'}
                            color={'secondary'}
                            label={'Weight in Ounces'}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Oz</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
