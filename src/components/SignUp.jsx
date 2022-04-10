import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useForm} from "react-hook-form";
import GoogleLogin from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";
import {Link} from "react-router-dom";


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = (data) => {
        console.log(data)
    };

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
                Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {
                                ...register(
                                    "firstName",
                                    {
                                        required: 'This field is required',
                                        minLength: {
                                            value: 2,
                                            message: 'First name must have at least 2 characters'
                                        }
                                    })
                            }
                            fullWidth
                            label="First Name"
                            autoFocus
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            {
                                ...register(
                                    "lastName",
                                    {
                                        required: 'This field is required',
                                        minLength: {
                                            value: 2,
                                            message: 'Last name must have at least 2 characters'
                                        }
                                    })
                            }
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
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
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value={showPassword} onChange={handleShowPassword} color="primary"/>}
                            label="Show password"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item xs={12}>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_CLIENT_ID}
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

                    <Grid item>
                        <Link to={'/login'}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignUp;