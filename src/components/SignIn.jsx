import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import GoogleLogin from "react-google-login";
import GoogleIcon from '@mui/icons-material/Google';
import {useForm} from "react-hook-form";

const client_id = "915033900039-bdlfua16lgflief48fks1e5u4e6b44u4.apps.googleusercontent.com"

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const onsubmit = (data) => {
        console.log(data);
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onsubmit)} sx={{mt: 1}}>
                <TextField
                    margin={'normal'}
                    fullWidth
                    label="Email Address"
                    {
                        ...register(
                            "email",
                            {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                    message: "Invalid email"
                                }
                            }
                        )
                    }
                    autoFocus
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Password"
                    autoComplete={'no'}
                    type={showPassword ? 'text' : 'password'}
                    {
                        ...register(
                            "password",
                            {
                                required: 'Password is required',
                                pattern: {
                                    value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{quot:'?/g.l,])(?!.*\s).*$/,
                                    message: "Password must contain at least 1 small-case letter" +
                                        ", 1 Capital letter, 1 digit, 1 special character " +
                                        "and the length should be between 6-10 characters"
                                }
                            }
                        )
                    }
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            value={showPassword}
                            color="primary"
                            onChange={handleShowPassword}
                        />
                    }
                    label="Show password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    disabled={!isValid}
                >
                    Sign In
                </Button>

                <Grid container>
                    <Grid item xs={12}>
                        <GoogleLogin
                            clientId={client_id}
                            onSuccess={(res) => console.log(res)}
                            onFailure={(res) => console.log(res)}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}

                            render={renderProps => (
                                <Button sx={{pt: 1.5}} variant={'outlined'} color={'info'} fullWidth
                                        onClick={renderProps.onClick}>
                                    <Grid spacing={1} container display={'flex'} direction={'row'}>
                                        <Grid item xs={5} textAlign={'right'}>
                                            <GoogleIcon/>
                                        </Grid>
                                        <Grid item xs={7} textAlign={'left'}>
                                            Sign in with Google
                                        </Grid>
                                    </Grid>
                                </Button>
                            )
                            }
                        />
                    </Grid>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    );
}

export default SignIn;