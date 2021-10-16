import { Action } from "redux";
import { EventI, EventsI } from "../../types/EventI";

export enum EventsActionsTypes {
  SET_EVENTS = "events/SET_EVENTS",
  FETCH_EVENTS = "/events/FETCH_EVENTS",
  DELETE_SIGNED_UP_EVENT = "/events/DELETE_SIGNED_UP_EVENT",
  FILTER_BY_YEAR = "events/FILTER_BY_YEAR",
  TOGGLE_SIGN_UP = "events/TOGGLE_SIGN_UP",
  SET_SIGNED_UP_EVENTS = "events/SET_SIGNED_UP_EVENTS",
}

export interface SetEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.SET_EVENTS;
  payload: EventsI["items"];
}

export interface FetchEventsAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.FETCH_EVENTS;
}

export interface DeleteEventAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.DELETE_SIGNED_UP_EVENT;
  payload: { signedUp: boolean; id: number };
}

export interface ToggleSignUpAction extends Action<EventsActionsTypes> {
  type: EventsActionsTypes.TOGGLE_SIGN_UP;
  payload: { signedUp: boolean; id: number };
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
  | SignedUpEventsAction
  | ToggleSignUpAction;
