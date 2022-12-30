import React from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { isNavComponent, getRole } from './Util/Helper';

// import Pages
import LandingPage from './pages/LandingPage';
import Employee from './pages/Employee';
import Corporate from './pages/Corporate';
import Doctor from './pages/Doctor';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: { main: '#263238', },
    secondary: { main: '#304ffe', },
    background: {
      default: '#b0bec5',
      paper: '#eeeeee',
    },
  },
  typography: {
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    fontFamily: 'Lato',
  },
});

const ErrElement = <Error role={`${getRole()}`} />
const router = createBrowserRouter([
  { errorElement: ErrElement, path: "/", element: <LandingPage />, index: true, },
  {
    errorElement: ErrElement, path: "/employee", element: <Employee />,
    path: "employee/:profile",
    element: <Profile />,
  },
  { errorElement: ErrElement, path: "/corporate", element: <Corporate />, },
  { errorElement: ErrElement, path: "/doctor", element: <Doctor />, },
  { errorElement: ErrElement, path: "/contact-us", element: <ContactUs role={`${getRole()}`} />, },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        {isNavComponent() ? <NavBar role={`${getRole()}`} /> : null}
        <RouterProvider router={router} />
        {isNavComponent() ? <Footer /> : null}
      </Typography>
    </ThemeProvider>
  );
}

export default App;