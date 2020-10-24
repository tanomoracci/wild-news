import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {
        height: '80px',
        marginTop: '-20px',
        marginBottom: '-30px',
    },
    p: {
        marginTop: '5px',
        marginBottom: '0',
    },
    p1: {
        marginTop: '15px',
        fontSize: '1.2em',
        marginBottom: '2px'
    }
}));


function Weather() {
    const classes = useStyles();
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();
    const [iconUrl, setIconUrl] = useState();

    const selectedCity = 'London'
    const apiKey = '0d8deaa85909ba7427becb57b3d70cc4';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

    useEffect(() => {
        async function fetchData(){
        const result = await axios(url);
        const weather = result.data.weather[0].main;
        const iconUrl = result.data.weather[0].icon;
        const temp = Math.round(result.data.main.temp);
            setTemp(temp);
            setWeather(weather);
            setIconUrl(iconUrl);
        };
        fetchData();
    });

    return (
        <div className={classes.container}>
        
           <p className={classes.p1}>Local temperature: {temp} C </p>
           <img className={classes.img} src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`} alt={weather}></img> 
           <p className={classes.p}>{weather}</p>
        
        </div>
    )
}

export default Weather
