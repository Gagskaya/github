import { getMonth, getYear } from "date-fns";
import { createSelector } from "reselect";
import { EventsI } from "../../types/EventI";
import { RootState } from "../store";

export const selectState = (state: RootState) => state;

export const selectEvents = (state: RootState): EventsI => state.events;
export const selectEventsItems = createSelector(
  selectEvents,
  (events) => events.items
);

export const selectFilterByYear = (state: RootState): number =>
  state.events.filterByYear;

export const selectFilterByMonth = (
  state: RootState
): { index: number; month: string } => state.events.filterByMonth;

export const selectFilteredEvents = createSelector(
  [selectEventsItems, selectFilterByYear, selectFilterByMonth],
  (items, filterByYear, filterByMonth) =>
    items.filter(
      (item) =>
        getYear(new Date(item.date)) === +filterByYear &&
        getMonth(new Date(item.date)) === filterByMonth.index
    )
);
