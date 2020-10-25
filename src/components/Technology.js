import { Grid } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {

    }

}))


function Technology() {

    const classes = useStyles()    
    const [news, setNews] = useState([])

    function FetchApi() {
        const apiKey = 'apiKey=05ac4cf6c947486d95affba88465ea66'; 
        const apiUrl = `https://newsapi.org/v2/everything?q=technology&${apiKey}`;
        axios.get(apiUrl)
        .then(response => response.data)
        .then(data => {
            const freshNews = data.articles;
            setNews(freshNews);
            console.log(freshNews);
         })
      
        }

    useEffect(() => {
        FetchApi();
    }, [])


    return (
        <div className={classes.root}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            
            <Grid container spacing={4}>
             
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

export default Technology
