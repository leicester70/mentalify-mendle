import { Container, Divider, Box, Typography } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import PromotionCards from "../components/SimpleComponents/PromotionCards";

export default function () {
    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 2000,
        }}>
            <Container disableGutters maxWidth='lg' sx={{
                paddingTop: 10,
                paddingBottom: 25,
            }}>
                <Player autoplay loop src="https://assets8.lottiefiles.com/packages/lf20_WVeoaK.json" style={{ height: "15vw" }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <Box mt={4} mb={8} textAlign='center'>
                    <Typography variant="h2" sx={{ my: 2 }}>Promotions</Typography>
                    <Typography variant="subtitle1">
                        View all promotions and deals for goods & services that promotions mental wellbeing
                    </Typography>
                </Box>
                <Divider sx={{ marginBottom: 12, backgroundColor: 'grey', opacity: '50%' }} />
                <PromotionCards />
            </Container>
        </Container>
    );
}