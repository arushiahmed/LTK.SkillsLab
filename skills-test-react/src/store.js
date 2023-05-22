import { createStore } from "redux";
import { cartReducer } from "./reducers/listReducer";

const store = createStore(cartReducer);

export default store;