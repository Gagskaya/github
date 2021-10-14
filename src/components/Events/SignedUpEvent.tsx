import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpToEvent } from "../../store/actionCreators/events";
import { selectSignedUpEvents } from "../../store/selectors/events";
import { eventInfo } from "../../store/actionCreators/events";

interface SignedUpEvent {
  eventInfor: any;
}

export const SignedUpEvent: React.FC<SignedUpEvent> = ({ eventInfor }) => {
  const dispatch = useDispatch();
  console.log(eventInfor);
  const handleSignUpToEvent = () => {
    dispatch(
      signUpToEvent({
        id: eventInfor.item.id,
        image: eventInfor.item.image,
        title: eventInfor.item.title,
        description: eventInfor.item.description,
        date: eventInfor.item.date,
      })
    );
    dispatch(
      eventInfo({
        id: eventInfor.item.id,
        image: eventInfor.item.image,
        title: eventInfor.item.title,
        description: eventInfor.item.description,
        date: eventInfor.item.date,
        signedUp: true,
      })
    );
  };
  return (
    <div>
      Событие {eventInfor.item.id}
      <div>Посетители</div>
      {!eventInfor.item.signedUp ? (
        <button onClick={handleSignUpToEvent}>Записаться</button>
      ) : (
        <button>Отказаться</button>
      )}
    </div>
  );
};
