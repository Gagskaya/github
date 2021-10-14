import { Action } from "redux";
import { EventI, EventInfo, EventsI } from "../../types/EventI";
import { EventInfoState } from "../reducers/eventInfo";

export enum EventsActionsTypes {
  SET_EVENTS = "events/SET_EVENTS",
  FETCH_EVENTS = "/events/FETCH_EVENTS",
  DELETE_SIGNED_UP_EVENT = "/events/DELETE_SIGNED_UP_EVENT",
  FILTER_BY_YEAR = "evets/FILTER_BY_YEAR",
  EVENT_INFO = "events/EVENT_INFO",
  SET_SIGNED_UP_EVENTS = "events/SET_SIGNED_UP_EVENTS",
}

export interface SetEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.SET_EVENTS;
  payload: EventsI["items"];
}
export interface EventInfoAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.EVENT_INFO;
  payload: EventInfoState["item"];
}

export interface FetchEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FETCH_EVENTS;
}

export interface DeleteEventAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.DELETE_SIGNED_UP_EVENT;
  payload: number;
}

export interface SignedUpEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.SET_SIGNED_UP_EVENTS;
  payload: EventI;
}

export interface FilterEventsByYear extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FILTER_BY_YEAR;
  payload: any;
}

export type EventsActions =
  | SetEventsAction
  | DeleteEventAction
  | EventInfoAction
  | SignedUpEventsAction;
