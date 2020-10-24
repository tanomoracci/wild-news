import React from 'react'
import { Paper, Switch, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoneyTicker from './MoneyTicker';
import Weather from './Weather';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'


const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: 'center',
        display: 'flex',
        borderBottom: '2.5px solid grey',
    },
    title: {
        flex: 8,
        fontSize: '4em',
        color: 'blue',
        letterSpacing: '0.25em',
        fontWeight: '900',
        marginTop: '15px',
    },
    date: {
        fontSize: '1.2em',
        flex: 2,
        alignSelf: 'end',
        marginLeft: '4px',
        marginBottom: '2px'
    },
    weather: {
        flex: 2,
    },
    money: {
        marginTop: '15px',
        marginBottom: '20px'
    }

  }));



function Header(props) {
    const classes = useStyles();
    const date = new Date();

    return (
        <>
        <Hidden smDown>
        <div className={classes.header}>
            <div className={classes.date}>
                <p><Moment format='MMMM Do YYYY'>{date}</Moment></p>
                <p><Moment format='h:mm:ss'>{date}</Moment></p>
                
                <Switch onChange={props.darkTheme} />
            </div>

            <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography><h1 className={classes.title}> Wild News</h1></Typography>
            </Link>
            <div className={classes.weather}>
                <Weather />
            </div>            
        </div>        
        <Paper elevation={2} className={classes.money}>
          <MoneyTicker />
        </Paper>
        </Hidden>
        </>
    )
}

export default Header
