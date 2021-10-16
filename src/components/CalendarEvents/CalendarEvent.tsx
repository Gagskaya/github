import { useDispatch } from "react-redux";

import { deleteEvent } from "../../store/actionCreators/events";

import eventIcon from "../../assets/icons/default.png";

interface CalendarEventProps {
  id: number;
  image: string;
  date: string;
  description: string;
  title: string;
  signedUp: boolean;
}
export const CalendarEvent: React.FC<CalendarEventProps> = ({
  image,
  id,
  description,
  date,
  title,
  signedUp,
}: CalendarEventProps) => {
  const dispatch = useDispatch();
  const handleDeleteEvent = (id: number, signedUp: boolean) => {
    signedUp = false;
    dispatch(deleteEvent(id));
  };

  return (
    <div className="main__calendar-event">
      <div className="main__calendar-event-info">
        <img src={eventIcon} alt="" />
        <div>
          <p>Событие {id}</p>
          <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>{title}</p>
        </div>
      </div>
      <div className="main__calendar-event-btns">
        <button
          style={{ borderRight: "1px solid rgba(0, 0, 0, 0.06)" }}
          onClick={() => handleDeleteEvent(id, signedUp)}
        >
          удалить
        </button>
        <button>перейти на страницу</button>
      </div>
    </div>
  );
};
