import {AppBar, Button, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" color="primary" sx={{py: 1, mb: 5}}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1, fontWeight: "bold"}}
                >
                    WeightConversion
                </Typography>
                <Button color="inherit">
                    <Typography variant="h7" sx={{fontWeight: "bold"}} id="buttonDiv">
                        Sign in
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
