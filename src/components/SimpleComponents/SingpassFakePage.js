import { Container, Box, Typography } from "@mui/material";
import { getRole, randomMinMax } from "../../Util/Helper";
import { Player, Controls } from "@lottiefiles/react-lottie-player"

export default function () {

    let role = getRole()
    setInterval(() => { { window.location.replace(`/${role}`); } }, randomMinMax(2200, 6000));
    return (
        <Container disableGutters maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            py: 7.5,
            minHeight: 1200,
            overflow: 'hidden'
        }}>
            <Typography variant="h4" mt={4} textAlign='center'>Authenticating</Typography>
            <Box>
                <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_usmfx6bp.json" style={{ width: '12.5vw' }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </Box>
            <Container mt={5} disableGutters sx={{ borderRadius: 5, boxShadow: 5, overflow: 'hidden' }}>
                <img width="100%" src="/singpass/singpassBanner.png" />
            </Container>
        </Container >
    );
}