import React from "react";
import { useSelector } from "react-redux";
import { selectSignedUpEvents } from "../../store/selectors/events";

import { EventI } from "../../types/EventI";
import { CalendarEvent } from "./CalendarEvent";

export const CalendarEvents = () => {
  const { signedUpItems } = useSelector(selectSignedUpEvents);

  const [noOfElement, setNoOfElement] = React.useState(3);
  const slicedEvents = signedUpItems?.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  return (
    <div>
      {!slicedEvents.length ? (
        <p>Событий нет</p>
      ) : (
        <>
          {" "}
          {slicedEvents.map((item: EventI) => (
            <CalendarEvent {...item} key={item.id} />
          ))}
          <button onClick={loadMore}>загрузить еще</button>
        </>
      )}
    </div>
  );
};
