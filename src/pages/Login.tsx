import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useAuth } from "../helpers/auth-context";
import Loader from "../components/loader/Loader";
import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginViewModel from "../view-models/LoginViewModel";
import { ErrorResponse } from "../helpers/Retorno";
import CustomSnackbar, {
  AlertMessage,
} from "../components/snackbar/CustomSnackbar";
import CustomTextField from "../components/textfield/CustomTextField";
import { handleLogin } from "../services/LoginService";
import { obterJwt } from "../helpers/jwt-decoder";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";

const theme = createTheme();

const validationSchema = yup.object({
  email: yup.string().required("Informe seu e-mail"),
  password: yup.string().required("Informe sua senha"),
});

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Einstein
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const { authenticated, setAuthenticated, setRole, setUsuarioLogadoId } =
    useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/");
      return;
    }

    localStorage.clear();
  }, [authenticated, navigate]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    severity: undefined,
    message: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <CustomSnackbar state={[open, setOpen]} alertMessage={alertMessage} />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                setLoading(true);
                const usuario: LoginViewModel = {
                  Email: values.email,
                  Password: values.password,
                };

                try {
                  const res = await handleLogin(usuario);

                  console.log("res", res);

                  const jwt = obterJwt(res.Dados.AccessToken);

                  setAuthenticated(true);
                  setUsuarioLogadoId(jwt.sub);
                  setRole(jwt.role);

                  setAlertMessage({
                    severity: "success",
                    message: "Login realizado com sucesso",
                  });
                  setOpen(true);
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
                } catch (error: any) {
                  let err: ErrorResponse = error?.data;
                  setAlertMessage({
                    severity: "error",
                    message: err?.Erros
                      ? err.Erros.map((err: string) => (
                          <>
                            {err}
                            <br />
                          </>
                        ))
                      : "Sistema temporariamente indisponível",
                  });
                  setOpen(true);
                } finally {
                  setLoading(false);
                }
              }}
            >
              <Form>
                <CustomTextField name="email" label="E-mail" />

                <CustomTextField
                  name="password"
                  label="Senha"
                  type="password"
                />

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
                  Entrar
                </Button>
                <Box display="flex" justifyContent="center">
                  <Loader loading={loading}></Loader>
                </Box>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Esqueci minha senha
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Form>
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
