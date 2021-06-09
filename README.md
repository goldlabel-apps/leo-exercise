# LEO Pre-interview Exercise

Pre-interview Exercise for Developer Candidates. [Instructions](./docs/instructions.pdf)

## Techstack

Before bootstrapping the app I consider the simplest possible solution to meet the requirement. Arguably a Shopping Cart needs something like Redux to manage state. The best and easiest to use implementation I've come across is [redux-toolkit](https://redux-toolkit.js.org). Bootstrapping React is easy with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). If we use the template `redux-typescript`, it gives us the techstack we want
- React
	- TypeScript
	- Redux

The npm package runner `npx` gives us the following bash command 

```bash
# Redux + TypeScript template
npx create-react-app leo-exercise --template redux-typescript
````

## Install

- Clone the repository, install dependencies & start dev server 

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/leo-exercise.git
yarn && yarn start
```

- Default browser will open to [localhost:3000](http://localhost:3000)
