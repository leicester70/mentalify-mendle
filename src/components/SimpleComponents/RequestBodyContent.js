import { Grid, Box, Typography, Button } from "@mui/material"
import { Player, Controls } from "@lottiefiles/react-lottie-player"

export default function (props) {
    const { direction, lottieSrc, lottiePlayerSize, headingText, bodyText, buttonText, buttonHref } = props
    switch (direction) {
        case "right":
            return (
                <Grid>
                    <Grid contianer direction='column-reverse'>
                        <Grid item flexGrow={1}>
                            <Box sx={{
                                textAlign: { md: 'right', xs: 'center' }
                            }}>
                                <Typography variant="h4" sx={{ my: 2 }}>{headingText}</Typography>
                                <Typography variant="body1" sx={{ mt: 2, mb: 6 }}>
                                    {bodyText}
                                </Typography>
                                <Button size="large" href={`/${buttonHref}`} variant="contained" color="secondary"><Typography fontWeight='bold'>{buttonText}</Typography></Button>
                            </Box>
                        </Grid>
                        <Grid flexGrow={5} item padding={1}>
                            <Player autoplay loop src={lottieSrc} style={{ width: lottiePlayerSize }}>
                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </Grid>
                    </Grid>
                </Grid>
            )
            break;

        default:
            // deault left side
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
                                <Button size="large" href="" variant="contained" color="secondary"><Typography fontWeight='bold'>{buttonText}</Typography></Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            )
    }
}