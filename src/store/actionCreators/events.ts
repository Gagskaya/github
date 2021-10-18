import axios from "axios";

import { Dispatch } from "redux";
import { EventI, EventsI } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

export const setEvents = (payload: EventsI["items"]): EventsActions => ({
  type: EventsActionsTypes.SET_EVENTS,
  payload,
});

export const fetchEvents = () => (dispatch: Dispatch) => {
  axios
    .get<EventI[]>(
      "https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62"
    )
    .then(({ data }) => {
      dispatch(setEvents(data));
    });
};

export const signUpToEvent = (
  id: number,
  firstName: string,
  secondName: string
) => ({
  type: EventsActionsTypes.SIGN_UP_TO_EVENT,
  payload: { id, firstName, secondName },
});

export const removeEvent = (id: number) => ({
  type: EventsActionsTypes.REMOVE_EVENT,
  payload: { id },
});

export const filterEventsByYear = (value: number) => ({
  type: EventsActionsTypes.FILTER_EVENTS_BY_YEAR,
  payload: { value },
});

export const filterEventsByMonth = (index: number, month: string) => ({
  type: EventsActionsTypes.FILTER_EVENTS_BY_MONTH,
  payload: { index, month },
});
