import React from 'react'
import '../css/header.css'
import axios from 'axios';
import { login, signup } from '../Database/api';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Header() {
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let UserData = {
            email: data.get("email"),
            password: data.get("password")
        };
        try {
            axios.post(login, UserData)
                .then(response => window.alert("Login Successfull"));
        } catch (error) {
            window.alert("Signup Failed");
        }
    };
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let UserData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password")
        };
        try {
            axios.post(signup, UserData)
                .then(response => window.alert("Signup Successfull"));
        } catch (error) {
            window.alert("Signup Failed");
        }
    };

    const [openLogin, setOpenLogin] = React.useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const [openSignup, setOpenSignup] = React.useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);

    return (
        <>
            <div className='header-container'>
                <div className='logo'></div>
                <div className='search-container'>
                    <div className='location'>
                        <i class="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder='New Delhi'></input>
                    </div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input id='search' type="text" placeholder='Search for a Restaurant,Cuisine or a Dish'></input>
                </div>
                <button className='login-signup' onClick={handleOpenLogin}>Login</button>
                <button className='login-signup' onClick={handleOpenSignup}>Signup</button>

                <Modal
                    open={openLogin}
                    onClose={handleCloseLogin}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color='success'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Button variant="text">
                                                Forgot password?
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button onClick={() => { handleCloseLogin(); handleOpenSignup(); }} variant="text">
                                                {"Don't have an account? Sign Up"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Modal>

                <Modal
                    open={openSignup}
                    onClose={handleCloseSignup}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <Box component="form" onSubmit={handleSignupSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color='success'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign up
                                    </Button>
                                    <Grid container>
                                        <Grid item>
                                            <Button onClick={() => { handleCloseSignup(); handleOpenLogin(); }} variant="text">
                                                {"Already have an account? Sign In"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Modal>

            </div>

        </>
    )
}
export default Header;