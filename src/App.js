import React, { useEffect, useState } from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { isNavComponent, getRole, getCurrentHref } from './Util/Helper';

// import Pages
import LandingPage from './pages/LandingPage';
import SingpassFakePage from './components/SimpleComponents/SingpassFakePage';
import Employee from './pages/Employee';
import Corporate from './pages/Corporate';
import Doctor from './pages/Doctor';
import NavBar from './components/Common/NavBar';
import Profile from './pages/Profile';
import Promotions from './pages/Promotions';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';
import Footer from './components/Common/Footer'
import EmployeeMakeRequest from './pages/EmployeeMakeRequest';
import Articles from './pages/Articles';
import { MakeRequestForm } from './components/Common/MakeRequestForm';
import Loading from './pages/Loading';

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
    fontFamily: 'Century Gothic',
  },
});

// const router = createHashRouter([
//   { errorElement: ErrElement, path: "/", element: <LandingPage />, index: true, },
//   { errorElement: ErrElement, path: "/singpass-login", element: <SingpassFakePage />, },
//   { errorElement: ErrElement, path: "/employee", element: <Employee />, },
//   { errorElement: ErrElement, path: "/employee/profile", element: <Profile />, },
//   { errorElement: ErrElement, path: "/employee/promotions", element: <Promotions />, },
//   { errorElement: ErrElement, path: "/employee/articles", element: <Articles />, },
//   { errorElement: ErrElement, path: "/employee/make-request", element: <EmployeeMakeRequest />, },
//   { errorElement: ErrElement, path: "/employee/make-request/form", element: <MakeRequestForm />, },
//   { errorElement: ErrElement, path: "/corporate", element: <Corporate />, },
//   { errorElement: ErrElement, path: "/doctor", element: <Doctor />, },
//   { errorElement: ErrElement, path: "/contact-us", element: <ContactUs role={`${getRole()}`} />, },
// ]);

function App() {
  const [appCurrentPath, setAppCurrentPath] = useState("/");
  const [appRole, setAppRole] = useState(undefined);

  useEffect((appCurrentPath) => {
    console.log("😍")
    console.log(appCurrentPath)
    console.log(appRole)
  })

  const appBody = () => {
    switch (appCurrentPath) {
      // Landing Page & Sign In
      case "/":
        window.sessionStorage.clear()
        return (<LandingPage appPathSetter={setAppCurrentPath} />);

      case "singpass-login":
        return (<SingpassFakePage appPathSetter={setAppCurrentPath} />);

      case "employee":
        return (<Employee appPathSetter={setAppCurrentPath} />);
      case "doctor":

        return (<Doctor appPathSetter={setAppCurrentPath} />);

      case "contact-us":
        return (<ContactUs appPathSetter={setAppCurrentPath} role={getRole()} />);

      default:
        return (<Error role={getRole()} />)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        {isNavComponent(appCurrentPath) ? <NavBar appPathSetter={appCurrentPath} role={getRole()} /> : null}
        {appBody()}
        {isNavComponent(appCurrentPath) ? <Footer /> : null}
      </Typography>
    </ThemeProvider>
  );
}

export default App;