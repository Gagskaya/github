import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { EventI, EventInfo, EventsI } from "../types/EventI";
import { rootReducer } from "./reducers/rootReducer";

const persistConfig = {
  key: "app",
  storage,
  blacklist: [],
};

export const initStore = (): { store: Store; persistor: Persistor } => {
  const store: Store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export interface RootState {
  events: EventsI;
}
