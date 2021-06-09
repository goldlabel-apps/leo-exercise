import React from 'react'
import clsx from 'clsx'
import { 
  useAppSelector, 
  useAppDispatch 
} from '../../app/hooks'
import { 
  makeStyles,
  Button,
  Grid,
  Typography,
} from '@material-ui/core/'
import {
  addItem,
  useItems,
} from './cartSlice'

const useStyles = makeStyles((theme) => ({
  cart: {
    maxWidth: 800,
    margin: 'auto',
    padding: theme.spacing(),
  },
}))

export function Cart() {
  
  const classes = useStyles()
  const cartItems = useAppSelector(useItems)
  const dispatch = useAppDispatch()

  return <div className={ clsx( classes.cart ) }>
          <Grid container>
              <Grid item xs={ 6 }>
                <Button 
                  variant={ `contained` }
                  color={`primary`}
                  onClick={() => dispatch( addItem( `apple` ) )} >
                  Add Apple to Cart (60p)
                </Button>

                <Button 
                  variant={ `contained` }
                  color={`secondary`}
                  onClick={() => dispatch( addItem( `orange` ) )} >
                  Add Apple to Cart (25p)
                </Button>
                
              </Grid>

              <Grid item xs={ 6 }>
                <Typography>
                  Cart
                </Typography>
                <pre>
                  { JSON.stringify( cartItems, null, 2) }
                </pre>
              </Grid>  
          </Grid>
        </div>
}
