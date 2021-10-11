import React from "react";
import "./App.scss";

import { Main } from "./pages/main";

import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "./store/actionCreators/events";
import { selectEvents } from "./store/selectors/events";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(selectEvents);

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchEvents());
    }
  }, [dispatch, items.length]);

  return <Main />;
}

export default App;
