import { 
  createSlice, 
  PayloadAction 
} from '@reduxjs/toolkit'
import { 
  RootState 
} from '../../app/store'

export interface CartState {
  items: any,
  cart: any,
}

const initialState: CartState = {
  items: [],
  cart: {
    totalPense: 0,
    apples: 0,
    freeApples: 0,
    oranges: 0,
    freeOranges: 0,
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload]
      const items = state.items
      const cart = {
        totalPense: 0,
        apples: 0,
        freeApples: 0,
        oranges: 0,
        freeOranges: 0,
      }
      
      for ( let i = 0; i < items.length; i ++){
        const item = items[i]
        if ( item === `apple` ) cart.apples += 1
        if ( item === `orange` ) cart.oranges += 1
      }

      let freeApples = 0
      let numToofers = cart.apples/2
      if (numToofers >= 1 ) freeApples = Math.floor(numToofers)
      cart.freeApples = freeApples
    
      let freeOranges = 0
      let numThreefers = cart.oranges/3
      if (numThreefers >= 1 ) freeOranges = Math.floor(numThreefers)
      cart.freeOranges = freeOranges

      let totalPense = 0
      totalPense += (cart.apples - freeApples) * 60
      totalPense += (cart.oranges - freeOranges) * 25

      cart.totalPense = totalPense

      state.cart = { ...state.cart, ...cart }
    }
  }
})

export const { addItem } = cartSlice.actions
export const useCart = (state: RootState) => state.cart.cart
export default cartSlice.reducer
