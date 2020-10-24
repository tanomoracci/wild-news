import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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
        height: '40vh',
        width: '100%',
        backgroundColor: 'blue',
    }
}));

function TopNews() {
    const classes = useStyles();
    const newLocal = 3;
    return (
        <div>
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
                        1
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                        2
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.news} >
                        3
                    </Grid>

                </Grid>
                    
                

            </Grid>
        </div>
    )
}

export default TopNews
