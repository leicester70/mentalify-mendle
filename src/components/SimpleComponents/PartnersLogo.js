import { Container, Grid } from "@mui/material";
import partnersLogoJson from '../../data/partnersLogo.json'
import { Box, display } from "@mui/system";

export default function () {

    return (
        <Grid container my={2} p={2} spacing={2} alignItems='center'
            sx={{
                borderRadius: 5,
                backgroundColor: 'white',
            }}>
            {
                partnersLogoJson.map((data) => {
                    return (
                        <Grid item md={2} xs={6} alignContent="center">
                            <img alt={data.name} src={data.imgSrc} style={{
                                display: 'block',
                                margin: 'auto',
                                height: '7.5vh',
                                mixBlendMode: 'multiply',
                            }} />
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}