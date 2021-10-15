import { combineReducers } from "redux";
import { events } from "./events";
// import { signedUpEvents } from "../reducers/signedUpEvents";

export const rootReducer = combineReducers({
  events,
});
