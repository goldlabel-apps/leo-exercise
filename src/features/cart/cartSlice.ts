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
    totalItems: 0,
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload]
      // Translate into useful object
      const items = state.items
      const cart = {
        totalItems: 0,
        totalPense: 0,
        apples: 0,
        oranges: 0,
      }
      for ( let i = 0; i < items.length; i ++){
        const item = items[i]
        if ( item === `apple` ) {
          cart.apples += 1
          cart.totalPense += 60
        }
        if ( item === `orange` ) {
          cart.oranges += 1
          cart.totalPense += 25
        }
        cart.totalItems += 1
      }
      state.cart = { ...state.cart, ...cart }
    }
  }
})

export const { addItem } = cartSlice.actions
export const useCart = (state: RootState) => state.cart.cart
export default cartSlice.reducer
