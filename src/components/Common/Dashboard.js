import { Grid, Container } from "@mui/material";

export default function (props) {
    const {
        Messages
    } = props
    return (
        <Grid container>
            <Grid item xs={8}>
                <Grid container>You have...
                    <Grid item>{`${Messages} Message(s)`}</Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Container>blablbal</Container>
            </Grid>
        </Grid>
    );
}