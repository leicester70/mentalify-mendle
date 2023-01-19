import { Container, Link, Box, Grid, Typography, Divider, Button } from "@mui/material";
import { getEmployeeData } from "../data/DataHelper";

//  Custom Components
import SingleActionCard from "../components/SimpleComponents/SingleActionCard";
import PromotionCards from "../components/SimpleComponents/PromotionCards";
import ArticleCards from "../components/SimpleComponents/ArticleCards";
import { Dashboard } from "../components/Common/Dashboard";
import Chat from "../components/Chat/Chat";
import { useEffect, useState } from "react";
import { getRole } from "../Util/Helper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Employee(props) {
    const { appPathSetter } = props
    const [showChat, setShowChat] = useState(false);

    const handleInboxClick = () => {
        setShowChat(true);
    }

    const returnData = () => {
        if (showChat) {
            return (
                <Container disableGutters maxWidth='lg' sx={{
                    paddingTop: 10,
                    paddingBottom: 25,
                }}>
                    <Button sx={{ mb: 2 }} startIcon={<ArrowBackIcon />} variant="outlined" onClick={() => { setShowChat(false); }}>Back</Button>
                    <Chat />
                </Container>
            )
        } else {
            return (
                <Container disableGutters maxWidth='lg' sx={{
                    paddingTop: 10,
                    paddingBottom: 25,
                }}>
                    <Typography my={8} variant="h4">Dashboard</Typography>
                    {/* Dashboard Stuff & Service */}
                    <Grid container>
                        <Grid container item sx={12}>
                            <Dashboard role={getRole} />
                        </Grid>
                        <Box mb={2}>
                            {/* <Typography variant="h5" textAlign={{ md: 'left', xs: 'center' }}></Typography> */}
                        </Box>
                        <Grid container item sx={12}>
                            <Grid container>
                            </Grid>
                            <Grid container direction='row' alignContent='left' columnGap={2}>
                                <Grid item>
                                    <SingleActionCard path='inbox'
                                        lottiePlayerBgColor='rgb(243, 223, 209)'
                                        lottiePlayerSrc='https://assets8.lottiefiles.com/packages/lf20_xZXFso.json'
                                        headerText='Inbox'
                                        bodyText="Tap or click here to view your inbox!"
                                        thisIsChat={true} onClickHandler={handleInboxClick} />
                                </Grid>
                                <Grid item>
                                    <SingleActionCard path='make-request'
                                        lottiePlayerBgColor='rgb(44, 108, 156)'
                                        lottiePlayerSrc='https://assets10.lottiefiles.com/packages/lf20_ot5gqdfc.json'
                                        headerText='Request'
                                        bodyText="Tap or click here to make a request. Find a psychologist, a buddy, or seek help in general."
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Featured Articles */}
                    <Typography mt={24} variant="h4">Featured Articles</Typography>
                    <Divider sx={{ marginTop: 6, marginBottom: 12, backgroundColor: 'grey', opacity: '25%' }} />
                    <ArticleCards renderLimit={3} />
                    <Box my={4}>
                        <Link color='secondary' href="employee/articles">See all Articles & Blogs</Link>
                    </Box>

                    {/* Featured Promotion */}
                    <Typography mt={20} variant="h4">Featured Promotions</Typography>
                    <Divider sx={{ marginTop: 6, marginBottom: 12, backgroundColor: 'grey', opacity: '25%' }} />
                    <PromotionCards renderLimit={3} />
                    <Box my={4}>
                        <Link color='secondary' href="employee/promotions">See all Promotions</Link>
                    </Box>
                </Container >
            )
        }
    }

    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 2000,
        }}>
            {returnData()}
        </Container >


    );
}