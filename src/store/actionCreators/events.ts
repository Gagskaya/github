import axios from "axios";

import { Dispatch } from "redux";
import { EventI, EventInfo, EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

export const setEvents = (payload: EventsI["items"]): EventsActions => ({
  type: EventsActionsTypes.SET_EVENTS,
  payload,
});

export const signUpToEvent = (payload: EventI) => ({
  type: EventsActionsTypes.SET_SIGNED_UP_EVENTS,
  payload,
});

export const fetchEvents = () => (dispatch: Dispatch) => {
  axios
    .get<EventI[]>(
      "https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62"
    )
    .then(({ data }) => {
      const newArr = data.filter((item: EventI) => item.id < 16);
      dispatch(setEvents(newArr));
    });
};

export const deleteEvent = (id: number) => ({
  type: EventsActionsTypes.DELETE_SIGNED_UP_EVENT,
  payload: id,
});

export const deleteEventAction = (id: number) => (dispatch: Dispatch) => {
  dispatch(deleteEvent(id));
};
