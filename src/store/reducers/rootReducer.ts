import { combineReducers } from "redux";
import { events } from "./events";
// import { signedUpEvents } from "../reducers/signedUpEvents";
import { eventInfo } from "./eventInfo";

export const rootReducer = combineReducers({
  events,

  eventInfo,
});
