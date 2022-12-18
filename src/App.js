import { ThemeProvider, Typography, createTheme } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Pages
import LandingPage from './pages/landing-page/LandingPage';

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
    index: true,
  },
  {
    path: "/employee",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <RouterProvider router={router} />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
