
# LEO Pre-interview Exercise

Pre-interview Exercise for Developer Candidates

- [Instructions](./public/pdf/instructions.pdf) 
- [OSM Kanban Board](https://github.com/orgs/listingslab-software/projects/14?fullscreen=true)

#### Install & Run

Clone the repository, install dependencies & start dev server. Default browser opens to [localhost:3000](http://localhost:3000). Once you have setup dev you can checkout the repo at any commit or tag

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/leo-exercise.git
yarn && yarn start
```

## Tech Stack

Before bootstrapping the app I consider the simplest possible solution to meet the requirement. Arguably a Shopping Cart needs something like Redux to manage state. The best and easiest to use implementation I've come across is [redux-toolkit](https://redux-toolkit.js.org). Bootstrapping React is easy with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). If we use the template `redux-typescript`, it gives us the techstack we want
- React
	- TypeScript
	- Redux

The npm package runner `npx` gives us the following bash command 

```bash
# Redux + TypeScript template
npx create-react-app leo-exercise --template redux-typescript
````

## Step 1: Shopping cart 

Next job is to create our app from the template provided. Along the way I remove any extraneous files the project doesn't need. At this point we will also add [Material UI](https://material-ui.com) to the project because we'll need some User Interface componenets. Now we're set up we can concentrate on just 2 files. `Cart.tsx` handles the frontend and `cartSlice.ts` the logic

### [Cart.tsx](./src/features/cart/Cart.tsx)

Renders components and handles UI. 

```javascript

<Button onClick={() => dispatch( addItem( 'apple' ) )} >
  Add to Cart
</Button>

```

### [cartSlice.ts](./src/features/cart/cartSlice.ts)

```javascript
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload]
    }
  }
})
```




