import { EventInfo } from "../../types/EventI";
import { EventInfoState } from "../reducers/eventInfo";
import { RootState } from "../store";

export const selectEventInfo = (state: RootState): EventInfo => state.eventInfo;
