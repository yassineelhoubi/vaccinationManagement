import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { login } from '../services';
import { useNavigate } from 'react-router-dom';
import { managerData } from '../app/features/managerSlice';
import { CustomizedSnackbar, CircularIndeterminate } from "../components"
import { AlertColor } from "@mui/material";
import { useState } from 'react';

type custom = AlertColor | 'danger'


const theme = createTheme();

const LoginForm: React.FC = () => {

    // FOR CUSTOM SNACKAR
    const [text, setText] = useState("there's no text right now !!!!");
    const [color, setColor] = useState<custom>("success");
    const [state, setState] = useState(false);
    //Spinner
    const [spinnerState, setSpinnerState] = useState(false);


    let navigate = useNavigate();


    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().min(5, 'Must be 5 characters or more').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        enableReinitialize: true,
        onSubmit: async (values: any) => {
            setSpinnerState(true)
            await login(values).then((res) => {
                setSpinnerState(false)
                const isLogged = res?.data.isLogged

                dispatch(managerData({
                    isLogged: res.data.isLogged,
                    token: res.data.token,
                    fName: res.data.doc.fName,
                    lName: res.data.doc.lName,
                    area: res.data.doc.area,
                    email: res.data.doc.email,
                }))
                
                if (isLogged) {
                    navigate("../dash", { replace: true });
                }
            }
            ).catch((err) => {
                setSpinnerState(false)
                setText("Your data is invalid")
                setColor("warning");
                setState(true);
            })

        }
    }

    )

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"

                                autoComplete="email"
                                {...formik.getFieldProps('email')}
                                autoFocus
                            />
                            {formik.touched.email && formik.errors.email ? <div className="text-red-400 ">{formik.errors.email}</div> : null}
                            <TextField
                                margin="normal"
                                required
                                fullWidth

                                label="Password"
                                type="password"
                                id="password"
                                {...formik.getFieldProps('password')}
                                autoComplete="current-password"
                            />
                            {formik.touched.password && formik.errors.password ? <div className="text-red-400 ">{formik.errors.password}</div> : null}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {/* spinner */}
                            {spinnerState && <CircularIndeterminate />}
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <CustomizedSnackbar text={text} color={color} state={state} setState={setState}></CustomizedSnackbar>
        </>
    );
}
export { LoginForm }

function userFormik() {
    throw new Error('Function not implemented.');
}
