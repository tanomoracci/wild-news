import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import NewsCard from './NewsCard'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        width: '100%',
    },
    right: {
    },
    rightHeading: {
        width: '100%',
        marginTop: '12px',
        height: '400px'
    },
    news:{
        height: '400px',
        width: '100%',
        height:'inherit'
    }
}));

function TopNews() {

    const classes = useStyles();
    const [news, setNews] = useState([])

    function FetchApi() {
        const apiKey = 'apiKey=05ac4cf6c947486d95affba88465ea66'; 
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&${apiKey}`;
        axios.get(apiUrl)
        .then(response => response.data)
        .then(data => {
            const freshNews = data.articles;
            setNews(freshNews);
         })
      
        }

    useEffect(() => {
        FetchApi();
    }, [])


    return (
        <div>
        { news.length > 0 &&
            <Grid container spacing={3} align='center'>
                <Grid item xs={12} md={8} >
                    <Paper className={classes.mainHeading}>
                    
                    <Slider autoplay={2500} >
                        {
                            news.map( (n, index) => (
                                <Card key={index}>
                                    <CardActionArea href={n.url}> 
                                    <CardContent>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            {n.title}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        alt={n.title}
                                        height="100%"
                                        image={n.urlToImage}
                                        title={n.title}
                                        />
                                    </CardActionArea>
                                </Card>
                                ))
                        }        
                            
                    </Slider>

                    </Paper>
                    
                </Grid>
                <Grid container xs={12} md={4} spacing={3} className={classes.right} >
                    <Grid item md={12} >
                        <Card className={classes.rightHeading}>
                            <CardActionArea href={news[13].url}> 
                                    <CardContent>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            {news[13].title}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        alt={news[13].title}
                                        height="250px"
                                        image={news[13].urlToImage}
                                        title={news[13].title}
                                        />
                                    </CardActionArea>
                                </Card>
                    </Grid>

                </Grid>
                <Grid item xs={12} container spacing={2} >
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[0].title} urlToImage={news[19].urlToImage} urlToNews={news[0].url} source={news[0].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[1].title} urlToImage={news[18].urlToImage} urlToNews={news[1].url} source={news[1].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[2].title} urlToImage={news[17].urlToImage} urlToNews={news[2].url} source={news[2].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[2].title} urlToImage={news[16].urlToImage} urlToNews={news[2].url} source={news[2].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[2].title} urlToImage={news[15].urlToImage} urlToNews={news[2].url} source={news[2].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[2].title} urlToImage={news[14].urlToImage} urlToNews={news[2].url} source={news[2].source.name}/>
                    </Grid>

                </Grid>
                    
                

            </Grid>
        }
        </div>
    )
}

export default TopNews
