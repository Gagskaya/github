import { Action } from "redux";
import { EventsI } from "../../types/EventI";

export enum EventsActionsTypes {
  SET_EVENTS = "events/SET_EVENTS",
  FETCH_EVENTS = "/events/FETCH_EVENTS",
}

export interface SetEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.SET_EVENTS;
  payload: EventsI["items"];
}

export interface FetchEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FETCH_EVENTS;
}

export type EventsActions = SetEventsAction;
