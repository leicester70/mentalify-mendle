import { Container, Typography, Divider, ButtonGroup, Button, Grid } from "@mui/material";
import "./LandingPage.css"

export default function () {
    return (
        <Container
            maxWidth='sm'
            sx={{
                marginTop: '15vh',
                padding: '10vh',
                bgcolor: 'background.paper',
                boxShadow: 10
            }}>
            <Typography textAlign='center'>
                <Typography variant="h5">Welcome to,</Typography>
                <Typography variant="h1" marginTop={1} marginBottom={2}>Mendle</Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>Semi-Anonymous Matchmaking between Employees & Therapists</Typography>
            </Typography>
            <Divider sx={{ padding: '1vw' }} />
            <Typography
                marginTop='3vh'
                paragraph
                fontStyle='italic'
                textAlign='center'>continue as
            </Typography>
            <Grid container direction='column' alignContent='center' rowGap={1}>
                <Grid item>
                    <Button fullWidth variant="contained" color="primary">Corporate Entity</Button>
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" color="primary">Inidividual/Employee</Button>
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" color="primary">Medical Professional</Button>
                </Grid>
            </Grid>
        </Container >
    );
}