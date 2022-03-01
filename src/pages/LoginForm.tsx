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
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
// import { login } from '../../Redux/services/login';
import { managerData } from '../app/features/managerSlice';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



const theme = createTheme();

const LoginForm: React.FC = () => {

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

            console.log(values)
            dispatch(managerData({
                email: values.email
            }))
            // await login(values).then((res) => {
            //     const role = res?.data?.doc?.role
            //     if (!role) {
            //         // isAdmin
            //         navigate("../dashboard/admin/manageManagers/read", { replace: true });

            //     } else if (role == "MANAGER") {
            //         console.log("MANAGER")

            //     } else if (role == "DELIVERY_MANAGER") {
            //         console.log("DELIVERY_MANAGER")

            //     } else if (role == "DRIVER") {
            //         console.log("DRIVER")

            //     }
            //     dispatch(userData({
            //         token: res.data.token,
            //         role: role ? role : "ADMIN",

            //     }))
            // }
            // ).catch((err) => {
            //     console.log(err)
            // })


        }
    }

    )

    return (
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
    );
}
export { LoginForm }

function userFormik() {
    throw new Error('Function not implemented.');
}
