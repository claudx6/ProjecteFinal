import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAnimalImage } from '../assets/js/backgroundImage.js';
import { signUp } from '../services/services.js';
import { useNavigate } from 'react-router-dom';
// function getRandomAnimalImageUrl() {
//   return `https://source.unsplash.com/random?animals&${Math.random()}`;
// }

function SignUp() {
  const [backgroundUrl, setBackgroundUrl] = React.useState(getAnimalImage());
  const [isLoading,setLoading] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundUrl(getAnimalImage());
    }, 5000); // la imagen se cambia cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const notify = (msg) => toast.warn(msg);
  const notifySuccess = (msg) => toast.success(msg);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get('firstName'),
      surname: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('numberPhone'),
      password: data.get('password'),
    };
    try {
      setLoading(true);
      const response = await signUp(payload);
      if(response.data.status) {
        console.log(response.data)
        notifySuccess(response.data.message);
        setTimeout(()=>{
          navigate("/login")
        },1000)
        
        setLoading(false);
      } else {
        notify(response.data.message)
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <ToastContainer />
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // fondo cubre toda la página
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // fondo semi-transparente del formulario
              p: 4, // relleno interno al contenedor del formulario
              borderRadius: 8,
              backdropFilter: 'blur(5px)', // desenfoque al fondo
            }}
          >
            <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
            CREA TU CUENTA AHORA
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellidos"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="numberPhone"
                    label="Número de teléfono"
                    type="numberPhone"
                    id="numberPhone"
                    autoComplete="numberPhone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Me gustaría recibir novedades."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                {isLoading ? 'Cargando' : 'CREAR CUENTA'}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                    <RouterLink to="/login" style={{color: '#1976d2', fontSize: '0.875rem'}}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignUp;