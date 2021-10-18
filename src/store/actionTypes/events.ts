import { Action } from "redux";
import { EventsI } from "../../types/EventI";

export enum EventsActionsTypes {
  SET_EVENTS = "events/SET_EVENTS",
  FETCH_EVENTS = "/events/FETCH_EVENTS",
  FILTER_EVENTS_BY_YEAR = "events/FILTER_EVENTS_BY_YEAR",
  FILTER_EVENTS_BY_MONTH = "events/FILTER_EVENTS_BY_MONTH",
  SIGN_UP_TO_EVENT = "events/SIGN_UP_TO_EVENT",
  REMOVE_EVENT = "events/REMOVE_EVENT",
}

export interface SetEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.SET_EVENTS;
  payload: EventsI["items"];
}

export interface FetchEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FETCH_EVENTS;
}

export interface SignUpToEventAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.SIGN_UP_TO_EVENT;
  payload: {
    id: number;
    firstName: string;
    secondName: string;
  };
}
export interface RemoveEventAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.REMOVE_EVENT;
  payload: {
    id: number;
  };
}

export interface FilterEventsByYear extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FILTER_EVENTS_BY_YEAR;
  payload: { value: number };
}
export interface FilterEventsByMonth extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FILTER_EVENTS_BY_MONTH;
  payload: { index: number; month: string };
}

export type EventsActions =
  | SetEventsAction
  | SignUpToEventAction
  | RemoveEventAction
  | FilterEventsByYear
  | FilterEventsByMonth;
