import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeEvent, signUpToEvent } from "../../store/actionCreators/events";
import { selectFilteredEvents } from "../../store/selectors/events";

import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import eventIcon from "../../assets/icons/default.png";
import arrow from "../../assets/icons/arrow.svg";

export const EventInfo = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const events = useSelector(selectFilteredEvents);
  const eventInfo = events.find((item) => item.id === +id && item);

  const [activeButton, setActiveButton] = React.useState(eventInfo?.signedUp);
  const [openSignUpEvent, setOpenSingUpEvent] = React.useState(false);
  const [openRemoveEvent, setOpenRemoveEvent] = React.useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");

  const handleSignUpToEvent = () => {
    if (!firstName && !secondName) {
      alert("Нужно заполнить хотя бы одно поле");
      return;
    }
    if (eventInfo) {
      dispatch(signUpToEvent(eventInfo.id, firstName, secondName));
      setActiveButton(!activeButton);
      setFirstName("");
      setSecondName("");
    }
    setOpenSingUpEvent(false);
  };

  const handleRemoveEvent = () => {
    if (eventInfo) {
      dispatch(removeEvent(eventInfo.id));
      setActiveButton(!activeButton);
    }

    setOpenRemoveEvent(false);
  };
  return (
    <>
      {eventInfo && (
        <div className="main__single-event-info">
          <div className="main__single-event-info-img">
            <img src={eventInfo?.image} alt="event-img" />
            <h4>Посетители</h4>
            {eventInfo.user ? (
              <span>
                {eventInfo.user.firstName} {eventInfo.user.secondName}
              </span>
            ) : (
              <span>пока никто не записан</span>
            )}
          </div>
          <div>
            <div className="main__single-event-info-header">
              <h3>Событие {eventInfo.id}</h3>
              <span>{eventInfo.date.substring(0, 10)}</span>
            </div>
            <div className="main__single-event-info-description">
              {eventInfo.description}
            </div>
            <div className="main__single-event-info-btn">
              {eventInfo.signedUp ? (
                <button onClick={() => setOpenRemoveEvent(true)}>
                  {" "}
                  <img src={arrow} alt="" />
                  Отказаться
                </button>
              ) : (
                <button onClick={() => setOpenSingUpEvent(true)}>
                  {" "}
                  <img src={arrow} alt="" /> Записаться
                </button>
              )}
            </div>
          </div>
          <Dialog
            open={openSignUpEvent}
            onClose={() => setOpenSingUpEvent(false)}
          >
            <DialogTitle>Записаться на событие</DialogTitle>
            <div className="dialog-event">
              <div className="dialog-event-header">
                <img src={eventIcon} alt="" />
                <div>
                  <p>Событие {eventInfo?.id}</p>
                  <p className="dialog-event-header-description">
                    {eventInfo.description.substring(0, 20)}
                  </p>
                </div>
              </div>
            </div>
            <DialogContent>
              <TextField
                autoFocus
                label="Имя"
                fullWidth
                variant="standard"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                autoFocus
                label="Фамилия"
                type="email"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenSingUpEvent(false)}>Отмена</Button>
              <Button onClick={handleSignUpToEvent}>Ок</Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openRemoveEvent}
            onClose={() => setOpenRemoveEvent(true)}
          >
            <DialogTitle>Вы уверены, что хотите отказаться?</DialogTitle>

            <DialogActions>
              <Button onClick={() => setOpenRemoveEvent(false)}>Отмена</Button>
              <Button onClick={handleRemoveEvent}>Ок</Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};
