import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { EventsI } from "../types/EventI";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export interface RootState {
  events: EventsI;
}
