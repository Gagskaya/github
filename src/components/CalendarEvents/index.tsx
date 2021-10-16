import React from "react";
import { useSelector } from "react-redux";
import {
  selectEventsItems,
  selectSignedUpEvents,
} from "../../store/selectors/events";

import { EventI } from "../../types/EventI";
import { CalendarEvent } from "./CalendarEvent";

export const CalendarEvents = () => {
  const { signedUpItems } = useSelector(selectSignedUpEvents);
  const events = useSelector(selectEventsItems);
  console.log(events);
  const [noOfElement, setNoOfElement] = React.useState(4);
  const slicedEvents = events?.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  return (
    <div>
      <>
        {slicedEvents?.map((item: EventI) => {
          return item.signedUp && <CalendarEvent {...item} key={item.id} />;
        })}
        <button onClick={loadMore}>загрузить еще</button>
      </>
    </div>
  );
};
