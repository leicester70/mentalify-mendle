import { Box, Card, CardActionArea, CardContent, Typography, CardMedia, Divider, Grid, Link } from "@mui/material";

// import Article JSON Data
import articleJson from "../../data/articles.json"
import { getRole } from "../../Util/Helper";

export default function ArticleCards(props) {
    const { ...renderLimit } = props

    if (!!renderLimit) {
        try {
            articleJson = articleJson.slice(0, props.renderLimit)
        } catch (error) {
            console.log("ArticleCards.js | Warning \n renderLimit ignored... \n" + error)
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
                articleJson.map((article) => {
                    return (
                        <Grid item flexGrow={1} md={6} xs={12}>
                            <Card>
                                <CardActionArea target='_blank' href={article.articleURL}>
                                    <CardMedia component="img" height="450" image={article.imgSrc} />
                                    <CardContent sx={{ height: 200, textOverflowWrap }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {article.title}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' color='secondary' component="div">
                                            {article.publisher}
                                        </Typography>
                                        <Typography variant="body2" sx={textOverflowWrap} color="text.secondary">
                                            {article.bodyText}
                                        </Typography>
                                    </CardContent>
                                    <Box px={4} textAlign='left' sx={{ opacity: 0.40 }} mb={2}>
                                        <Link underline='none'>Continue Reading...</Link>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}