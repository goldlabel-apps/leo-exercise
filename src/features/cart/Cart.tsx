import React from 'react'
import clsx from 'clsx'
import { 
  useAppSelector, 
  useAppDispatch 
} from '../../app/hooks'
import { 
  makeStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core/'
import {
  addItem,
  useCart,
} from './cartSlice'
import Top from '../../components/Top'

const useStyles = makeStyles((theme) => ({
  cart: {
    maxWidth: 800,
    margin: 'auto',
    padding: theme.spacing(),
  },
  padded:{
    margin: theme.spacing(),
  },
  shop:{
    marginTop: theme.spacing(),
  },
  totals: {
    margin: theme.spacing( 2 ),
  },
}))

export function Cart() {
  
  const classes = useStyles()
  const cart = useAppSelector(useCart)
  const { 
    totalItems,
    totalPense, 
  } = cart
  const readablePrice = `£${(Math.round(totalPense) / 100).toFixed(2)}`
  const dispatch = useAppDispatch()

  return <div className={ clsx( classes.cart ) }>
          
          <Top />
          <Grid container>    
              <Grid item xs={ 12 } sm={ 6 }>
                <div className={ clsx( classes.shop ) }>

                  <List>
                    
                    <ListItem button
                      onClick={() => dispatch( addItem( `apple` ) )}
                    >
                      <ListItemAvatar>
                        <Avatar src={ `jpg/apples.jpg` }/>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={ `60p` }
                        secondary={ `Add an Apple to the cart` }
                      />
                    </ListItem>

                    <ListItem button
                      onClick={() => dispatch( addItem( `orange` ) )}
                    >
                      <ListItemAvatar>
                        <Avatar src={ `jpg/oranges.jpg` } />
                      </ListItemAvatar>
                      <ListItemText 
                        primary={ `25p` }
                        secondary={ `Add an Orange to the cart` }
                      />
                    </ListItem>

                  </List>

                </div>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <div className={ clsx( classes.totals ) }>
                  
                    <CardHeader 
                      title={ `Cart` }
                      subheader={ `${totalItems} items` }
                    />

                    <CardContent>
                      <Typography variant={ `h6` }>
                        { !totalItems ? `Empty.` : `Total ${ readablePrice }` }
                      </Typography> 
                    </CardContent>


                </div>
              </Grid>  
          </Grid>
        </div>
}

/*
                    <CardActions>
                      <Button 
                        variant={ `contained` }
                        color={ `primary` }
                      >
                        checkout
                      </Button>
                      </CardActions>
*/