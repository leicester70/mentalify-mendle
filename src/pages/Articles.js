import { Container, Divider, Box, Typography } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import ArticleCards from "../components/SimpleComponents/ArticleCards";

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
                <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_3adn32pc.json" style={{ height: "27.5vh" }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <Box mt={4} mb={8} textAlign='center'>
                    <Typography variant="h2" sx={{ my: 2 }}>Articles & Blogs</Typography>
                    <Typography variant="subtitle1">
                        View all articles and blogs relevant to mental wellbeing and learn something new!<br />You may click or tap one an article for further reading.
                    </Typography>
                </Box>
                <Divider sx={{ marginBottom: 12, backgroundColor: 'grey', opacity: '50%' }} />
                <ArticleCards />
            </Container>
        </Container>
    );
}