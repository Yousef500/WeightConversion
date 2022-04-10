import {AppBar, Button, Grid, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {GoogleLogout} from "react-google-login";

const Header = () => {

    const logout = () => {
        console.log("logged out");
    }

    return (
        <AppBar position="static" color="primary" sx={{pt: 1, pb: 1, mb: 5}}>
            <Toolbar>
                <Grid
                    alignItems={'center'}
                    direction={'row'}
                    container
                    spacing={0.2}
                >
                    <Grid item xs={7}>
                        <Button variant={'outlined'} size={'large'} component={Link} to={'/'} color={"inherit"}>
                            <HomeIcon sx={{mr: 1}}/>
                            Weight Conversion
                        </Button>
                    </Grid>
                    <Grid
                        item xs={5}
                        display={'flex'}
                        justifyContent={'right'}
                    >
                        <Button variant={'outlined'} color={'inherit'} component={Link} to={'/login'}>
                            <Typography variant={'subtitle1'}>
                                Login
                            </Typography>
                        </Button>
                        <GoogleLogout
                            clientId={process.env.REACT_APP_CLIENT_ID}
                            buttonText={'Logout'}
                            onLogoutSuccess={logout}
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
