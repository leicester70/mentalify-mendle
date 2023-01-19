import { Container, Box, Typography } from "@mui/material";
import { getRole, randomMinMax } from "../../Util/Helper";
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import { useEffect } from "react";

export default function (props) {
    const { appPathSetter } = props

    useEffect(() => {
        console.log(getRole())
        setInterval(() => { appPathSetter(getRole()) },
            randomMinMax(2200, 6000));
    }, [])

    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            py: 7.5,
            minHeight: '100vh',
            overflow: 'none',
            position: 'absolute'
        }}>
            <Typography variant="h4" mt={4} textAlign='center'>Authenticating</Typography>
            <Box>
                <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_usmfx6bp.json" style={{ width: '12.5vw' }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </Box>
            <Container mt={5} disableGutters sx={{ borderRadius: 5, boxShadow: 5, overflow: 'hidden' }}>
                <img width="100%" alt="" src="https://raw.githubusercontent.com/leicester70/mentalify-mendle/master/public/singpass/singapss_background_image.png" />
            </Container>
        </Container >
    );
}