import PoetNavigator from "./navigation/PoetNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allPoetry from "./store/reducers/allPoetry";
import allPoets from "./store/reducers/allPoets";

const rootReducer = combineReducers({
  poetries: allPoetry,
  poets: allPoets,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <PoetNavigator />
    </Provider>
  );
}
