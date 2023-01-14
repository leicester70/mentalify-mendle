import { Grid, Box, Typography, Button } from "@mui/material"
import { Player, Controls } from "@lottiefiles/react-lottie-player"

export default function (props) {
    const { lottieSrc, lottiePlayerSize, headingText, bodyText, buttonText, formSelection } = props

    const redirectToForm = () => {
        window.sessionStorage.setItem("selectedForm", formSelection)
        window.location.href = window.location.href + "/form"
    }

    return (
        <Grid>
            <Grid container>
                <Grid item flexGrow={1}>
                    <Player autoplay loop src={lottieSrc} style={{ width: lottiePlayerSize }}>
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </Grid>
                <Grid flexGrow={5} item padding={1}>
                    <Box sx={{
                        textAlign: { md: 'left', xs: 'center' }
                    }}>
                        <Typography variant="h4" sx={{ my: 2 }}>{headingText}</Typography>
                        <Typography variant="body1" sx={{ mt: 2, mb: 6 }}>
                            {bodyText}
                        </Typography>
                        <Button size="large" onClick={() => { redirectToForm() }} variant="contained" color="secondary"><Typography fontWeight='bold'>{buttonText}</Typography></Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}