import produce, { Draft } from "immer";
import { EventI, EventInfo } from "../../types/EventI";
import { EventsActions, EventsActionsTypes } from "../actionTypes/events";

export interface EventInfoState {
  item: EventInfo | object;
}

const initialState: EventInfoState = {
  item: {},
};

export const eventInfo = produce(
  (draft: Draft<EventInfoState>, action: EventsActions) => {
    if (action.type === EventsActionsTypes.EVENT_INFO) {
      draft.item = action.payload;
    }
  },
  initialState
);
