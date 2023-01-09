import { Container, Link, Box, Grid, Typography, Divider } from "@mui/material";
import { getEmployeeData } from "../data/DataHelper";

//  Custom Components
import SingleActionCard from "../components/SimpleComponents/SingleActionCard";
import PromotionCards from "../components/SimpleComponents/PromotionCards";
import ArticleCards from "../components/SimpleComponents/ArticleCards";

export default function Employees() {
    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 2000,
        }}>
            <Container disableGutters maxWidth='lg' sx={{
                paddingTop: 10,
                paddingBottom: 25,
            }}>
                <Typography mt={5} variant="h4">Dashboard</Typography>
                <Divider sx={{ marginTop: 6, marginBottom: 12, backgroundColor: 'grey', opacity: '50%' }} />
                {/* Dashboard Stuff & Service */}
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
                        </Grid>
                    </Grid>
                </Grid>
                {/* Featured Articles */}
                <Typography mt={20} variant="h4">Featured Articles</Typography>
                <Divider sx={{ marginTop: 6, marginBottom: 12, backgroundColor: 'grey', opacity: '50%' }} />
                <ArticleCards renderLimit={3} />
                <Box my={4}>
                    <Link color='secondary' href="employee/articles">See all Articles & Blogs</Link>
                </Box>

                {/* Featured Promotion */}
                <Typography mt={20} variant="h4">Featured Promotions</Typography>
                <Divider sx={{ marginTop: 6, marginBottom: 8, backgroundColor: 'grey', opacity: '50%' }} />
                <PromotionCards renderLimit={3} />
                <Box my={4}>
                    <Link color='secondary' href="employee/promotions">See all Promotions</Link>
                </Box>
            </Container>
        </Container >


    );
}