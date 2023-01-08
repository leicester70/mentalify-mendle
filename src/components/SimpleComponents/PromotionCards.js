import { Card, CardContent, Typography, CardMedia, Divider, Grid } from "@mui/material";

// import Promotion JSON Data
import promotionJson from "../../data/promotion.json"
import { margin } from "@mui/system";

export default function PromotionCards(props) {
    const { ...renderLimit } = props

    const textOverflowWrap = ({ vh = '10vh' }) => {
        return {
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: vh
        }
    }

    return (
        <Grid container direction='row' alignContent='left' rowGap={4}>
            {
                promotionJson.map((promotion) => {
                    return (
                        <Grid item margin={1} flexGrow={1} md={4} xs={12}>
                            <Card>
                                <CardMedia sx={{ height: 400 }} image={promotion.imageSrc} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={textOverflowWrap('2vh')}>{promotion.headingText}</Typography>
                                    <Typography variant="subtitle1" color="text.secondary">{promotion.vendor}</Typography>
                                    <Typography variant="subtitle2" color="text.secondary">{promotion.startDate} to {promotion.endDate}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={textOverflowWrap}>{promotion.bodyText}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}