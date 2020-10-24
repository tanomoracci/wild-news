import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'stretch',
    marginTop: '8px'
    },
  header: {
    width: '100%',
    marginLeft: '-10px',
    marginTop: '5px'
  },
  media: {
    height: '100%',
  },
});

export default function NewsCard(props) {
  const classes = useStyles();
  const {title, urlToImage, urlToNews, source} = props
  

  return (
    <Card className={classes.root} elevation={0} >
        <CardActionArea href={urlToNews}>
       <CardContent className={classes.header}>

          <Typography variant="h6" color="textSecondary" component="p">
            {title}
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            {source}
          </Typography>

        </CardContent>

      
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title={title}
        />
       
      </CardActionArea>
      
    </Card>
  );
}