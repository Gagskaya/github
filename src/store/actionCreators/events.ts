import axios from "axios";

import { Dispatch } from "redux";
import { EventI, EventsI } from "../../types/EventI";
import { EventsActionsTypes, SetEventsAction } from "../actionTypes/events";

export const setEvents = (payload: EventsI["items"]): SetEventsAction => ({
  type: EventsActionsTypes.SET_EVENTS,
  payload,
});

export const fetchEvents = () => (dispatch: Dispatch) => {
  axios
    .get<EventI[]>(
      "https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62"
    )
    .then(({ data }) => {
      const newArr = data.filter((item: EventI) => item.id < 12);
      dispatch(setEvents(newArr));
    });
};
