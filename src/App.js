import React from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Pages
import LandingPage from './pages/LandingPage';
import Employee from './pages/Employee';
import Corporate from './pages/Corporate';
import Doctor from './pages/Doctor';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Error from './pages/Error';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#304ffe',
    },
    background: {
      default: '#b0bec5',
      paper: '#eeeeee',
    },
  },
  typography: {
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 600,
    fontFamily: 'Lato',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error role={`${getRole()}`} />,
    index: true,
  },
  {
    path: "/employee",
    element: <Employee />,
    errorElement: <Error role={`${getRole()}`} />,
  },
  {
    path: "/corporate",
    element: <Corporate />,
    errorElement: <Error role={`${getRole()}`} />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
    errorElement: <Error role={`${getRole()}`} />,
  },
]);

function App() {

  console.log([isNavComponent(), getRole()])
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

function isNavComponent() {
  let x = window.location.href.split("/")
  if (x.includes("employee") || x.includes("corporate") || x.includes("doctor")) {
    return true
  } else return false
}

function getRole() {
  let x = window.location.href.split("/")
  if (x.includes("employee")) { return "employee" }
  if (x.includes("corporate")) { return "corporate" }
  if (x.includes("doctor")) { return "doctor" }
  return ""
}