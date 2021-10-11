import { useDispatch } from "react-redux";
import eventIcon from "../../assets/icons/default.png";
import { deleteEvent } from "../../store/actionCreators/events";

interface CalendarEventProps {
  id: number;
  image: string;
  date: string;
  description: string;
  title: string;
}
export const CalendarEvent: React.FC<CalendarEventProps> = ({
  image,
  id,
  description,
  date,
  title,
}: CalendarEventProps) => {
  const dispatch = useDispatch();
  const handleDeleteEvent = (id: number) => {
    dispatch(deleteEvent(id));
  };
  return (
    <div className="main__calendar-event">
      <div className="main__calendar-event-info">
        <img src={eventIcon} alt="" />
        <div>
          <p>Событие {id + 1}</p>
          <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            Lorem ipsum dolor sit amet...
          </p>
        </div>
      </div>
      <div className="main__calendar-event-btns">
        <button
          style={{ borderRight: "1px solid rgba(0, 0, 0, 0.06)" }}
          onClick={() => handleDeleteEvent(id)}
        >
          удалить
        </button>
        <button>перейти на страницу</button>
      </div>
    </div>
  );
};
