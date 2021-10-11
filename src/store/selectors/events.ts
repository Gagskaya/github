import { createSelector } from "reselect";
import { EventsI } from "../../types/EventI";
import { RootState } from "../store";

export const selectEvents = (state: RootState): any => state.events;
export const selectEventsItems = createSelector(
  selectEvents,
  (events) => events.items
);
