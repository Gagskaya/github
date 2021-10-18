import { EventI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

export interface EventsReducerState {
  items: EventI[];
  filterByYear: number;
  filterByMonth: { index: number; month: string };
}

const initialState: EventsReducerState = {
  items: [],
  filterByYear: 2022,
  filterByMonth: { index: 0, month: "Январь" },
};

export const events = (state = initialState, action: EventsActions) => {
  if (action.type === EventsActionsTypes.SET_EVENTS) {
    return {
      ...state,
      items: action.payload,
    };
  } else {
    if (action.type === EventsActionsTypes.SIGN_UP_TO_EVENT) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (action.payload.id === item.id) {
            item.signedUp = true;
            item.user = {
              firstName: action.payload.firstName,
              secondName: action.payload.secondName,
            };
            return item;
          }
          return item;
        }),
      };
    } else {
      if (action.type === EventsActionsTypes.REMOVE_EVENT) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (action.payload.id === item.id) {
              item.signedUp = false;
              item.user = {
                firstName: null,
                secondName: null,
              };
              return item;
            }
            return item;
          }),
        };
      } else {
        if (action.type === EventsActionsTypes.FILTER_EVENTS_BY_YEAR) {
          return {
            ...state,
            filterByYear: action.payload.value,
          };
        } else {
          if (action.type === EventsActionsTypes.FILTER_EVENTS_BY_MONTH) {
            return {
              ...state,
              filterByMonth: action.payload,
            };
          } else {
            return state;
          }
        }
      }
    }
  }
};
