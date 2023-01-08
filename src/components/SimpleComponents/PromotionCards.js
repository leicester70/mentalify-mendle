import { Card, CardContent, Typography, CardMedia, Divider, Grid } from "@mui/material";

// import Promotion JSON Data
import promotionJson from "../../data/promotion.json"
console.log(promotionJson)

export default function PromotionCards(props) {
    const { ...renderLimit } = props

    // if ((!!renderLimit) && (renderLimit < promotionJson.length() - 1)) {
    //     promotionJson = promotionJson.slice(0, renderLimit)
    // }

    // const SinglePromotionComponent = ({ promotion }) => {
    //     <Grid container item sx={4} >
    //         <Card sx={{}}>
    //             <CardMedia sx={{ height: 400 }} image={promotion.imageSrc} />
    //             <CardContent>
    //                 <Typography variant="subtitle1" color="text.secondary">{promotion.vendor}</Typography>
    //                 <Typography gutterBottom variant="h5" component="div">{promotion.headingText}</Typography>
    //                 <Typography variant="body2" color="text.secondary">{promotion.bodyText}</Typography>
    //                 <Divider sx={{ marginTop: 6, marginBottom: 6, backgroundColor: 'grey', opacity: '35%' }} />
    //                 <Typography variant="subtitle1" color="text.secondary">{promotion.startDate} - {promotion.endDate}</Typography>
    //             </CardContent>
    //         </Card>
    //     </Grid>
    // }

    return (
        <Grid container>
            {
                promotionJson.map((promotion) => {
                    return (
                        <Grid container item sx={4} >
                            <Card sx={{}}>
                                <CardMedia sx={{ height: 400 }} image={promotion.imageSrc} />
                                <CardContent>
                                    <Typography variant="subtitle1" color="text.secondary">{promotion.vendor}</Typography>
                                    <Typography gutterBottom variant="h5" component="div">{promotion.headingText}</Typography>
                                    <Typography variant="body2" color="text.secondary">{promotion.bodyText}</Typography>
                                    <Divider sx={{ marginTop: 6, marginBottom: 6, backgroundColor: 'grey', opacity: '35%' }} />
                                    <Typography variant="subtitle1" color="text.secondary">{promotion.startDate} - {promotion.endDate}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}