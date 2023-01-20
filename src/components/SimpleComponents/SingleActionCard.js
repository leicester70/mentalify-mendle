import { Controls, Player } from '@lottiefiles/react-lottie-player';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import { Card, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material";
import { Box } from '@mui/system';
import { getRole } from '../../Util/Helper';

export default function (props) {
    const {
        path,
        lottiePlayerBgColor = '',
        lottiePlayerSrc,
        lottiePlayerHeight = 300,
        headerText,
        bodyText,
        thisIsChat,
        onClickHandler
    } = props

    if (thisIsChat && !!onClickHandler) {
        return (
            <Card sx={{ minWidth: { md: 300, sm: '95vw' } }}>
                <CardActionArea onClick={onClickHandler}>
                    <Box sx={{ backgroundColor: lottiePlayerBgColor }}>
                        <Player autoplay loop src={lottiePlayerSrc} style={{ height: 450, width: '100%' }}>
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">{headerText}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {bodyText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        )
    }

    return (
        <Card sx={{ minWidth: { md: 300, sm: '95vw' } }}>
            <CardActionArea href={`/${getRole()}/${path}`}>
                <Box sx={{ backgroundColor: lottiePlayerBgColor }}>
                    <Player autoplay loop src={lottiePlayerSrc} style={{ height: 450 }}>
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">{headerText}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {bodyText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}