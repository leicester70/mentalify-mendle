import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Container, Grid, Typography } from "@mui/material";
import Dashboard from "../components/Common/Dashboard";
import { getEmployeeData } from "../data/DataHelper";

const Conversations =
    <Container>
    </Container>

const MakeRequest =
    <></>

export default function () {
    return (
        <Container disableGutters maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1200,
        }}>
            <Container maxWidth='lg' disableGutters sx={{
                paddingY: 10,
            }}>
                <Container>
                    <Typography padding={5} fontFamily='Century' variant="h1" fontStyle='italic' paddingY={10}>Welcome, {getEmployeeData().firstName}</Typography>
                </Container>
                <Dashboard Messages={1} />
            </Container>

        </Container >


    );
}