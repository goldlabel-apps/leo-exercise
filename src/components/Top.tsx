import React from 'react'
// import MenuIcon from '@material-ui/icons/Menu'
import { 
  createStyles,
  AppBar,
  Theme,
  makeStyles,  
  Toolbar,
  Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
)

export default function Top() {
  const classes = useStyles()

  return <div className={classes.top}>
          <AppBar position="static">
            <Toolbar>
              
              <Typography 
                variant="h6" 
                className={classes.title}>
                Exercise
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
}

/*
<IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon />
              </IconButton>
*/
