if (process.env.NODE_ENV === 'production') {
  export { configureStore } from './configureStore.prod';
} else {
  export { configureStore } from './configureStore.dev';
}