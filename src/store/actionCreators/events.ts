import axios from "axios";

import { Dispatch } from "redux";
import { EventI, EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

export const setEvents = (payload: EventsI["items"]): EventsActions => ({
  type: EventsActionsTypes.SET_EVENTS,
  payload,
});

export const setSignedUpEvents = (payload: EventI) => ({
  type: EventsActionsTypes.SET_SIGNED_UP_EVENTS,
  payload,
});

export const fetchEvents = () => (dispatch: Dispatch) => {
  axios
    .get<EventI[]>(
      "https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62"
    )
    .then(({ data }) => {
      const newArr = data.filter((item: EventI) => {
        item.signedUp = false;
        return item.id < 16;
      });
      dispatch(setEvents(newArr));
    });
};

export const toggleSignUp = (signedUp: boolean, id: number) => ({
  type: EventsActionsTypes.TOGGLE_SIGN_UP,
  payload: { signedUp, id },
});

export const deleteEvent = (signedUp: boolean, id: number) => ({
  type: EventsActionsTypes.DELETE_SIGNED_UP_EVENT,
  payload: { signedUp, id },
});

export const deleteEventAction = (signedUp: boolean, id: number) => (
  dispatch: Dispatch
) => {
  dispatch(deleteEvent(signedUp, id));
};

export const toggleSignUpAction = (signedUp: boolean, id: number) => (
  dispatch: Dispatch
) => {
  dispatch(toggleSignUp(signedUp, id));
};
