import { Container, Box, Typography } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player"

export default function () {
    return (
        <Container disableGutters maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            py: 50,
            minHeight: "100vh",
            overflow: 'none',
        }}>
            <Typography variant="h4" mt={4} textAlign='center'>Loading</Typography>
            <Box>
                <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_usmfx6bp.json" style={{ width: '50vw' }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </Box>
        </Container >
    );
}