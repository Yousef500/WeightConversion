import {AppBar, Button, Grid, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {

    return (
        <AppBar position="static" color="primary" sx={{pt: 1, pb: 1, mb: 5}}>
            <Toolbar>
                <Grid
                    alignItems={'center'}
                    direction={'row'}
                    container
                    spacing={1}
                >
                    <Grid item xs={8}>
                        <Button variant={'outlined'} size={'large'} component={Link} to={'/'} color={"inherit"}>
                            <HomeIcon sx={{mr: 1}}/>
                            Weight Conversion
                        </Button>
                    </Grid>
                    <Grid
                        item xs={4}
                        display={'flex'}
                        justifyContent={'right'}
                    >
                        <Button variant={'outlined'} color={'inherit'} component={Link} to={'/login'}>
                            <Typography variant={'subtitle1'}>
                                Login
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
