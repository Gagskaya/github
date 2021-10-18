import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectFilteredEvents } from "../../store/selectors/events";

export const SingleEvent = () => {
  const events = useSelector(selectFilteredEvents);

  const history = useHistory();

  return (
    <div className="main__single-event-wrap">
      {events.length ? (
        events.map((item) => (
          <div className="main__single-event" key={item.id}>
            <div className="main__single-event-header">
              <h6>Событие {item.id}</h6>
              <button onClick={() => history.push(`/events/${item.id}`)}>
                Больше
              </button>
            </div>
            <div>
              <img
                style={{ height: 220, width: 353 }}
                src={item.image}
                alt=""
              />
            </div>
            <div className="main__single-event-footer">
              <h6>{item.date.substring(0, 10)}</h6>
            </div>
          </div>
        ))
      ) : (
        <p>С выбранной датой событий нет</p>
      )}
    </div>
  );
};
