import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Define your reducers
const reducer = combineReducers({
  // Add your reducers here
  // exampleReducer: exampleReducer,
});

const initialState = {};
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
