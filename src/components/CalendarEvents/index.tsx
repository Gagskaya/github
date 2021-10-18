import { useDispatch, useSelector } from "react-redux";

import eventIcon from "../../assets/icons/default.png";
import { useHistory } from "react-router-dom";
import { selectFilteredEvents } from "../../store/selectors/events";
import React from "react";
import { removeEvent } from "../../store/actionCreators/events";

export const CalendarEvents = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const events = useSelector(selectFilteredEvents);

  const [noOfElement, setNoOfElement] = React.useState(3);
  const signedUpEvents = events?.filter((item) => item.signedUp);
  const slicedEvents = signedUpEvents?.slice(0, noOfElement);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  const handleRemoveEvent = (id: number) => {
    dispatch(removeEvent(id));
  };

  return (
    <div>
      {slicedEvents.length ? (
        slicedEvents.map((item) => (
          <div className="main__calendar-event" key={item.id}>
            <div className="main__calendar-event-info">
              <img src={eventIcon} alt="" />
              <div>
                <p>Событие {item.id}</p>
                <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>{item.title}</p>
              </div>
            </div>
            <div className="main__calendar-event-btns">
              <button
                style={{ borderRight: "1px solid rgba(0, 0, 0, 0.06)" }}
                onClick={() => handleRemoveEvent(item.id)}
              >
                удалить
              </button>
              <button onClick={() => history.push(`/events/${item.id}`)}>
                перейти на страницу
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Событий пока нет</p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            border: "1px solid black",
            padding: "2px 7px 2px 7px",
            marginTop: 10,
          }}
          onClick={loadMore}
        >
          загрузить больше
        </button>
      </div>
    </div>
  );
};
