import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setSignedUpEvents,
  toggleSignUp,
  toggleSignUpAction,
} from "../../store/actionCreators/events";
import { selectEventsItems } from "../../store/selectors/events";

export const EventInfo = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEventsItems);
  const { id }: any = useParams();
  const eventInfo = events.find((item) => item.id === +id && item);
  const [activeButton, setActiveButton] = React.useState(eventInfo?.signedUp);
  console.log(eventInfo);

  const handleSignUpToEvent = () => {
    if (eventInfo) {
      // eventInfo.signedUp = true
      dispatch(toggleSignUp(eventInfo.signedUp, eventInfo.id));
      setActiveButton(!activeButton);
    }
  };
  console.log(events);
  return (
    <div>
      Событие {eventInfo?.id}
      <div>Посетители</div>
      {activeButton ? (
        <button>Отказаться</button>
      ) : (
        <button onClick={handleSignUpToEvent}>Записаться</button>
      )}
    </div>
  );
};
