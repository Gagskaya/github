import React from "react";
import "./App.scss";

import { Main } from "./pages/main";

import { useDispatch } from "react-redux";
import { fetchEvents } from "./store/actionCreators/events";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return <Main />;
}

export default App;
