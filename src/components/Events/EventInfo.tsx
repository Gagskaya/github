import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { signUpToEvent } from "../../store/actionCreators/events";
import { selectEventsItems } from "../../store/selectors/events";

export const EventInfo = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEventsItems);

  let { id }: any = useParams();
  const newEvent = events.find((item) => (item.id === +id ? item : null));
  const handleSignUpToEvent = () => {
    if (newEvent) {
      dispatch(signUpToEvent(newEvent));
    }
  };
  return (
    <div>
      Событие {newEvent?.id}
      <div>Посетители</div>
      <button onClick={handleSignUpToEvent}>Записаться</button>
    </div>
  );
};
