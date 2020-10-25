import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import NewsCard from './NewsCard'

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        height: '70vh',
        width: '100%',
    },
    rightHeading: {
        height: '35vh',
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: '4px',
        marginTop: '12px'
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

    console.log(news);
    return (
        <div>
        { news.length > 0 &&
            <Grid container spacing={3} align='center'>
                <Grid item xs={12} md={8} >
                    <Paper className={classes.mainHeading}>
                    izquierda
                    </Paper>
                    
                </Grid>
                <Grid item xs={12} md={4} spacing={3} container >
                <Grid item md={12} className={classes.rightHeading}>
                arriba
                </Grid>
                <Grid item md={12} className={classes.rightHeading}>
                    abajo
                    
                </Grid>

                </Grid>
                <Grid item xs={12} container spacing={2} >
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[0].title} urlToImage={news[0].urlToImage} urlToNews={news[0].url} source={news[0].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[1].title} urlToImage={news[1].urlToImage} urlToNews={news[1].url} source={news[1].source.name}/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                    <NewsCard title={news[2].title} urlToImage={news[2].urlToImage} urlToNews={news[2].url} source={news[2].source.name}/>
                    </Grid>

                </Grid>
                    
                

            </Grid>
        }
        </div>
    )
}

export default TopNews
