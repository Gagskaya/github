import produce, { Draft } from "immer";
import { EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

const initialState: EventsI = {
  items: [],
};

export const events = produce(
  (draft: Draft<EventsI>, action: EventsActions) => {
    if (action.type === EventsActionsTypes.SET_EVENTS) {
      draft.items = action.payload;
      // window.localStorage.setItem("events", JSON.stringify(action.payload));
    }
    if (action.type === EventsActionsTypes.DELETE_EVENT) {
      draft.items = draft.items.filter((item) => item.id !== action.payload);
    }
  },
  initialState
);
