import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Container, Grid, Typography } from "@mui/material";
import { getEmployeeData } from "../data/DataHelper";
import SingleActionCard from "../components/SimpleComponents/SingleActionCard";

export default function () {
    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1200,
        }}>
            <Container maxWidth='lg' sx={{
                paddingY: 10,
            }}>
                <Grid container>
                    <Grid container item md={8} sx={12}>
                        <Typography padding={5} fontFamily='Century' variant="h4" fontStyle='italic'>Hello, {getEmployeeData().firstName}</Typography>
                    </Grid>
                    <Grid container item md={4} sx={12}>
                        <Grid container direction='column' alignContent='left' rowGap={2} paddingTop={2}>
                            <Typography variant="h5" textAlign={{ md: 'left', xs: 'center' }}>Services</Typography>
                            <Grid item flexGrow={1}>
                                <SingleActionCard path='make-request'
                                    lottiePlayerBgColor='rgb(44, 108, 156)'
                                    lottiePlayerSrc='https://assets10.lottiefiles.com/packages/lf20_ot5gqdfc.json'
                                    headerText='Request'
                                    bodyText="Tap or click here to make a request. Find a psychologist, a buddy, or seek help in general."
                                />
                            </Grid>
                            <Grid item flexGrow={1}>
                                <SingleActionCard path='inbox'
                                    lottiePlayerBgColor='rgb(243, 223, 209)'
                                    lottiePlayerSrc='https://assets8.lottiefiles.com/packages/lf20_xZXFso.json'
                                    headerText='Inbox'
                                    bodyText="Tap or click here to view your inbox!"
                                />
                            </Grid>
                            <Grid item flexGrow={1}>
                                <SingleActionCard path='inbox'
                                    lottiePlayerBgColor='rgb(243, 223, 209)'
                                    lottiePlayerSrc='https://assets8.lottiefiles.com/packages/lf20_xZXFso.json'
                                    headerText='Inbox'
                                    bodyText="Tap or click here to view your inbox!"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container >


    );
}