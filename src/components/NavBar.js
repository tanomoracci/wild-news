import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem, ListItemText, List, Container, Drawer, Divider } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import TopNews from './TopNews';
import Header from './Header';
import Argentina from './Argentina';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  appBar: {
    color: 'black',
    backgroundColor: 'transparent',
    
    
  },
  list: {
    
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,  
    fontSize: '1.2em',
    letterSpacing: '0.15em',
    textAlign: 'center',
    marginLeft: '-60px'

  },
  menuTitle: {
    textDecoration: 'none',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
}));



 const NavBar = props => {
  const classes = useStyles();
  const { history } = props;
  console.log(history);

  const itemList = [
    {
      text: 'Latest News',
      address: '/latest-news',
    },
    {
      text: 'Argentina',
      address: '/argentina', 
    },
    {
      text: 'Bussiness',
      address: '/bussiness',
    },
    {
      text: 'Sports',
      address: '/sports',
    },
    {
      text: 'Society',
      address: '/society',
      
    },
  ]

  return (
    
    <Router>

    
      <AppBar position="static" className={classes.appBar}>
        <Toolbar color="transparent">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Hidden smDown>
          <List className={classes.list}>

            { itemList.map((item, index) => {    
              return (
                
                <Link to={item.address} className={classes.menuTitle} >
                <ListItem button key={item.text}  >
                  <ListItemText primary={item.text}></ListItemText>
                </ListItem>
                </Link>
              )
            })
            }
          </List>
          </Hidden>
          <Hidden mdUp>
            <Typography className={classes.title}><h2> Wild News</h2></Typography>
          </Hidden>
        
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path='/'>
            <Container>
              <Header />
              <TopNews />
            </Container>
        </Route>
        <Route exact path='/society'>
              <Container>
              <Header />
              Society
              </Container>
        </Route>
        <Route path='/argentina'>
          <Container>
            <Header />
            <Argentina />
          </Container>  
        </Route>
        <Route path='/latest-news'>
          <Header />
          latest news
        </Route>
        <Route path='/bussiness'>
          <Header />
          bussines
        </Route>
        <Route path='/sports'>
          <Header />
          Sports
        </Route>
      </Switch>

      </Router>
  );
}

export default NavBar
