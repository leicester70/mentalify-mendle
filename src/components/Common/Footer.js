import { Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function () {
    return (

        <Container disableGutters maxWidth sx={{
            bgcolor: '#171717',
            color: '#707070'
        }}>
            <Container
                maxWidth='lg'
                sx={{
                    paddingTop: 15,
                    paddingBottom: 5,
                }}>
                <Typography variant="h3" paddingBottom={2}>Mentaify, Mendle</Typography>
                <Typography paragraph>
                    <strong>Group Memmbers</strong>,<br />
                    Athens, Lester, Shan Yu, Nadira, Xin Yi
                </Typography>
                <Divider sx={{ marginTop: 5, marginBottom: 10, backgroundColor: 'grey', opacity: '50%' }} />
                <Typography variant="h5" paddingBottom={2}>💭 Developer Notes</Typography>
                <Typography paragraph>Yes, I know it wasn't a must to code this out but I really wanted to.<br />
                    <br />I'm just taking this chance to practice my front-end development skills.<em>I hate doing modules from the school of, "Interdisciplinary Studies"</em><br />
                    - C. L</Typography>

                <Divider sx={{ marginTop: 5, marginBottom: 10, backgroundColor: 'grey', opacity: '50%' }} />
                2022 - 2023 <br />
            </Container>
        </Container>
    );
}