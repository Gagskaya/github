import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import eventImg from "../../assets/icons/event-img.png";
import { eventInfo } from "../../store/actionCreators/events";

interface SingleEventProps {
  id: number;
  image: string;
  date: string;
  description: string;
  title: string;
}

export const SingleEvent: React.FC<SingleEventProps> = ({
  id,
  title,
  date,
  description,
  image,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleEventInfo = () => {
    dispatch(eventInfo({ id, image, description, date, title }));
    history.push(`/events/${id}`);
  };
  return (
    <div className="main__single-event">
      <div className="main__single-event-header">
        <h6>Событие {id + 1}</h6>
        <button onClick={handleEventInfo}>Больше</button>
      </div>
      <div>
        <img src={eventImg} alt="" />
      </div>
      <div className="main__single-event-footer">
        <h6>{date}</h6>
      </div>
    </div>
  );
};
