import { Card, CardContent, Typography, CardMedia, Divider, Grid, Link } from "@mui/material";

// import Promotion JSON Data
import promotionJson from "../../data/promotion.json"
import { getRole } from "../../Util/Helper";

export default function PromotionCards(props) {
    const { ...renderLimit } = props

    if (!!renderLimit) {
        try {
            promotionJson = promotionJson.slice(0, props.renderLimit)
        } catch (error) {
            console.log("PromotionCards.js | Warning \n renderLimit ignored... \n" + error)
        }
    }

    const textOverflowWrap = ({ vh = '10px' }) => {
        return {
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: vh
        }
    }

    return (
        <Grid container alignContent='space-around' spacing={5}>
            {
                promotionJson.map((promotion) => {
                    return (
                        <Grid item flexGrow={1} md={6} xs={12}>
                            <Card sx={{ minHeight: 700 }}>
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