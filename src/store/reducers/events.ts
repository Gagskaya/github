import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { EventI, EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";
import { selectEventsItems } from "../selectors/events";

export interface EventsReducerState {
  items: EventI[];
  signedUpItems: EventI[];
}

const initialState: EventsReducerState = {
  items: [],
  signedUpItems: [],
};

export const events = (state = initialState, action: EventsActions) => {
  if (action.type === EventsActionsTypes.SET_EVENTS) {
    return {
      ...state,
      items: action.payload,
    };
  }
  if (action.type === EventsActionsTypes.DELETE_SIGNED_UP_EVENT) {
    return {
      ...state,
      items: state.items?.map((item: EventI) => {
        if (action.payload.id === item.id) {
          item.signedUp = false;
          return item;
        }
      }),
    };
  }
  if (action.type === EventsActionsTypes.SET_SIGNED_UP_EVENTS) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  } else {
    if (action.type === EventsActionsTypes.TOGGLE_SIGN_UP) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (action.payload.id === item.id) {
            item.signedUp = !action.payload.signedUp;
            return item;
          }
          return item;
        }),
      };
    } else {
      return state;
    }
  }
};
