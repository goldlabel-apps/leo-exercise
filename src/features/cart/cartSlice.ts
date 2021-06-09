import { 
  createSlice, 
  PayloadAction 
} from '@reduxjs/toolkit'
import { 
  RootState 
} from '../../app/store'

export interface CartState {
  items: any,
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload]
    }
  }
})

export const { addItem } = cartSlice.actions
export const useItems = (state: RootState) => state.cart.items
export default cartSlice.reducer
