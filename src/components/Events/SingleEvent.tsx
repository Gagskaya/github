import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import eventImg from "../../assets/icons/event-img.png";

import { selectEventsItems } from "../../store/selectors/events";

export const SingleEvent = () => {
  const events = useSelector(selectEventsItems);
  const history = useHistory();
  return (
    <div className="main__single-event-wrap">
      {events?.map((item) => (
        <div className="main__single-event" key={item.id}>
          <div className="main__single-event-header">
            <h6>Событие {item.id + 1}</h6>
            <button onClick={() => history.push(`/events/${item.id}`)}>
              Больше
            </button>
          </div>
          <div>
            <img src={eventImg} alt="" />
          </div>
          <div className="main__single-event-footer">
            <h6>{item.date}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
