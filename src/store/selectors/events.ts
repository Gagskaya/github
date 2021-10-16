import { createSelector } from "reselect";
import { EventI, EventsI } from "../../types/EventI";
import { RootState } from "../store";

export let selectEvents = (state: RootState): EventsI => state.events;
export let selectEventsItems = createSelector(
  selectEvents,
  (events) => events.items
);
export let selectSignedUpEvents = (state: RootState): EventsI => state.events;
