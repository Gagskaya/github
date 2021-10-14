import { createSelector } from "reselect";
import { EventI, EventsI } from "../../types/EventI";
import { RootState } from "../store";

export const selectEvents = (state: RootState): EventsI => state.events;
export const selectEventsItems = createSelector(
  selectEvents,
  (events) => events.items
);
export const selectSignedUpEvents = (state: RootState): EventsI => state.events;
