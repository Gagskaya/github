import React from "react";
import { useSelector } from "react-redux";
import { selectEventsItems } from "../../store/selectors/events";
import { EventI } from "../../types/EventI";
import { CalendarEvent } from "./CalendarEvent";

export const CalendarEvents = () => {
  const events = useSelector(selectEventsItems);
  const [noOfElement, setNoOfElement] = React.useState(3);
  const slicedEvents = events.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  return (
    <div>
      {slicedEvents.map((item: EventI) => (
        <CalendarEvent {...item} />
      ))}
      <button onClick={loadMore}>загрузить еще</button>
    </div>
  );
};
