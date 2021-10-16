import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { EventI, EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";
import { selectEventsItems } from "../selectors/events";

export interface EventsReducerState {
  items: EventI[] | [];
  signedUpItems: EventI[] | [];
}

const initialState: EventsReducerState = {
  items: [],
  signedUpItems: [],
};

// export const events = produce(
//   (draft: Draft<EventsI>, action: EventsActions) => {
//     if (action.type === EventsActionsTypes.SET_EVENTS) {
//       draft.items = action.payload;
//     }
//     if (action.type === EventsActionsTypes.DELETE_SIGNED_UP_EVENT) {
//       draft.signedUpItems = draft.signedUpItems.filter(
//         (item) => item.id !== action.payload
//       );
//     }
//     if (action.type === EventsActionsTypes.SET_SIGNED_UP_EVENTS) {
//       draft.signedUpItems = [...draft.signedUpItems, action.payload];
//     }
//   },
//   initialState
// );
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
      signedUpItems: state.signedUpItems.filter(
        (item) => item.id !== action.payload
      ),
    };
  }
  if (action.type === EventsActionsTypes.SET_SIGNED_UP_EVENTS) {
    return {
      ...state,
      signedUpItems: [...state.signedUpItems, action.payload],
    };
  } else {
    return state;
  }
};
