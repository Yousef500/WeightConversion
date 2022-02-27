import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
import GoogleLogin from "react-google-login";

const Header = () => {
    const client_id = "915033900039-bdlfua16lgflief48fks1e5u4e6b44u4.apps.googleusercontent.com"

    return (
        <AppBar position="static" color="primary" sx={{pt:1,pb: 1, mb: 5}}>
            <Toolbar>
                <Grid
                    alignItems={'center'}
                    direction={'row'}
                    container
                    spacing={1}
                >
                    <Grid item xs={8}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, fontWeight: "bold"}}
                        >
                            WeightConversion
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={4}
                        display={'flex'}
                        justifyContent={'right'}
                        style={{borderWidth: '2px', borderColor: 'green'}}
                    >
                        <GoogleLogin
                            clientId={client_id}
                            buttonText={'Login with Google'}
                            onSuccess={(res) => console.log(res)}
                            onFailure={(res) => console.log(res)}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            style={{marginRight: 0, paddingRight: 0}}
                        />
                    </Grid>
                </Grid>


                {/*<Button color="inherit">*/}
                {/*    <Typography variant="h7" sx={{fontWeight: "bold"}} id="buttonDiv">*/}
                {/*        Sign in*/}
                {/*    </Typography>*/}
                {/*</Button>*/}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
