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
  content:{
    marginLeft: theme.spacing( 2 ),
  },
  padded:{
    margin: theme.spacing( 2 ),
  },
  shop:{
    marginTop: theme.spacing(),
  },
}))

export function Cart() {
  
  const classes = useStyles()
  const cart = useAppSelector(useCart)
  const { 
    totalPense,
    apples,
    freeApples,
    oranges,
    freeOranges,
  } = cart
  const readablePrice = `£${(Math.round(totalPense) / 100).toFixed(2)}`
  const dispatch = useAppDispatch()

  return <div className={ clsx( classes.cart ) }>
          
          <Top />
          <Grid container>    

              <Grid item xs={ 12 } sm={ 8 }>
                    <CardHeader 
                      title={ `Cart` }
                      subheader={ `New Deal... 2 for 1 Apples & 3 for 2 Oranges` }
                    />
                      <div className={ clsx( classes.content ) }>
                        <Typography variant={ `body1` } gutterBottom>
                          { apples } apples, 
                          so you get { freeApples } FREE!
                        </Typography> 

                        <Typography variant={ `body1` } gutterBottom>
                          { oranges } oranges
                          so you get { freeOranges } FREE!
                        </Typography> 
                      </div>
                      <div className={ clsx( classes.padded ) }>
                        <Typography variant={ `h6` }>
                          { `Total ${ readablePrice }` }
                        </Typography>
                      </div>

              </Grid>  


              <Grid item xs={ 12 } sm={ 4 }>
                <div className={ clsx( classes.shop ) }>

                  <List>
                    
                    <ListItem button
                      onClick={() => dispatch( addItem( `apple` ) )}
                    >
                      <ListItemAvatar>
                        <Avatar src={ `jpg/apples.jpg` }/>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={ `1 Apple 60p` }
                        secondary={ `Add an Apple to you cart` }
                      />
                    </ListItem>

                    <ListItem button
                      onClick={() => dispatch( addItem( `orange` ) )}
                    >
                      <ListItemAvatar>
                        <Avatar src={ `jpg/oranges.jpg` } />
                      </ListItemAvatar>
                      <ListItemText 
                        primary={ `1 Orange 25p` }
                        secondary={ `Add an Orange to your cart` }
                      />
                    </ListItem>

                  </List>

                </div>
              </Grid>


          </Grid>
        </div>
}
