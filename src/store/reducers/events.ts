import produce, { Draft } from "immer";
import { EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

const initialState: EventsI = {
  items: [],
  signedUpItems: [],
};

export const events = produce(
  (draft: Draft<EventsI>, action: EventsActions) => {
    if (action.type === EventsActionsTypes.SET_EVENTS) {
      draft.items = action.payload;
    }
    if (action.type === EventsActionsTypes.DELETE_SIGNED_UP_EVENT) {
      draft.signedUpItems = draft.signedUpItems.filter(
        (item) => item.id !== action.payload
      );
    }
    if (action.type === EventsActionsTypes.SET_SIGNED_UP_EVENTS) {
      draft.signedUpItems = [...draft.signedUpItems, action.payload];
    }
  },
  initialState
);
