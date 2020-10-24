import { Grid } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import NewsCard from './NewsCard'


const useStyles = makeStyles((theme) => ({
    root: {

    }

}))

function Argentina() {

    const classes = useStyles()
    const [news, setNews] = useState([])

    function FetchApi() {
        const apiKey = 'apiKey=05ac4cf6c947486d95affba88465ea66'; 
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=ar&language"=en&${apiKey}`;
        axios.get(apiUrl)
        .then(response => response.data)
        .then(data => {
            const freshNews = data.articles;
            setNews(freshNews);
            console.log(freshNews)
         })
      
        }

    useEffect(() => {
        FetchApi();
    }, [])


    return (
        <div className={classes.root}>
            {/* <Grid container spacing={2}>
                <Grid item xs={12}>
                    Argentina
                </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            1
                        </Grid>
                        <Grid item xs={12} md={6}>
                            2
                        </Grid>
                    </Grid> 

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            1
                        </Grid>
                        <Grid item xs={12} md={4}>
                            2
                        </Grid>
                        <Grid item xs={12} md={4}>
                            3
                        </Grid>
                    </Grid> 

            </Grid> */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            
            <Grid container spacing={4}>
               {/*  {
                    news.length >0 && news.map(n => {
                        return(
                        <Grid item xs={12} md={4}>
                            <h2>{n.title}</h2>
                            <img src={n.urlToImage} alt={n.title} height='150px'></img>
                        </Grid>
                        )
                    })
                } */}

                {
                    news.length > 0 && news.map( n => {
                        return (
                            <Grid item xs={12} md={4}>
                                <NewsCard title={n.title} urlToImage={n.urlToImage} urlToNews={n.url} source={n.source.name}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Argentina
