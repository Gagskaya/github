import React from "react";
import "./App.scss";

import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectEventsItems } from "./store/selectors/events";
import { EventI } from "./types/EventI";
import { getYear } from "date-fns";
import { fetchEvents, setEvents } from "./store/actionCreators/events";
import { SignedUpEvent } from "./components/Events/SignedUpEvent";
import { CalendarEvents } from "./components/CalendarEvents";
import { AllEvents } from "./components/Events/AllEvents";
import { selectEventInfo } from "./store/selectors/eventsInfo";

export const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pathname = history.location.pathname;

  const events = useSelector(selectEventsItems);
  const eventInfo = useSelector(selectEventInfo);

  const [activeButton, setActiveButton] = React.useState("");
  const [month, setMonth] = React.useState(1);
  const [year, setYear] = React.useState(2020);

  const selectMonths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  React.useEffect(() => {
    if (!events.length) {
      dispatch(fetchEvents());
    }
  }, [dispatch, events.length]);
  const selectYears = [2022, 2021];
  const setActiveCalendar = () => {
    history.push("/calendar");
    setActiveButton("calendar");
  };

  const setActiveEvents = () => {
    history.push("/events");
    setActiveButton("events");
  };

  React.useEffect(() => {
    if (pathname === "/calendar") {
      setActiveButton("calendar");
    } else if (pathname === "/events") {
      setActiveButton("events");
    } else if (pathname === "/") {
      history.push("/calendar");
      setActiveButton("calendar");
    }
  }, [pathname, history]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setYear(e.target.value);

    const filterEventsByYear = events?.filter((item: EventI) => {
      return getYear(new Date(item.date)) === +e.target.value;
    });
    console.log(filterEventsByYear);

    dispatch(setEvents(filterEventsByYear));
  };

  return (
    <main className="main">
      <div className="fluid-container">
        <div className="main__btns">
          <button
            onClick={() => setActiveEvents()}
            className={activeButton === "events" ? "active" : ""}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M13.5 1.49716H0.5C0.223437 1.49716 0 1.7206 0 1.99716V11.9972C0 12.2737 0.223437 12.4972 0.5 12.4972H13.5C13.7766 12.4972 14 12.2737 14 11.9972V1.99716C14 1.7206 13.7766 1.49716 13.5 1.49716ZM12.875 3.22841V11.3722H1.125V3.22841L0.69375 2.89247L1.30781 2.10341L1.97656 2.62372H12.025L12.6938 2.10341L13.3078 2.89247L12.875 3.22841ZM12.025 2.62216L7 6.52841L1.975 2.62216L1.30625 2.10185L0.692188 2.89091L1.12344 3.22685L6.46094 7.37685C6.61444 7.4961 6.80328 7.56084 6.99766 7.56084C7.19203 7.56084 7.38088 7.4961 7.53438 7.37685L12.875 3.22841L13.3062 2.89247L12.6922 2.10341L12.025 2.62216Z"
                  fill="black"
                  fillOpacity="0.85"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>События</span>
          </button>
          <button
            onClick={() => setActiveCalendar()}
            className={activeButton === "calendar" ? "active" : ""}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M13.5 1.49716H0.5C0.223437 1.49716 0 1.7206 0 1.99716V11.9972C0 12.2737 0.223437 12.4972 0.5 12.4972H13.5C13.7766 12.4972 14 12.2737 14 11.9972V1.99716C14 1.7206 13.7766 1.49716 13.5 1.49716ZM12.875 3.22841V11.3722H1.125V3.22841L0.69375 2.89247L1.30781 2.10341L1.97656 2.62372H12.025L12.6938 2.10341L13.3078 2.89247L12.875 3.22841ZM12.025 2.62216L7 6.52841L1.975 2.62216L1.30625 2.10185L0.692188 2.89091L1.12344 3.22685L6.46094 7.37685C6.61444 7.4961 6.80328 7.56084 6.99766 7.56084C7.19203 7.56084 7.38088 7.4961 7.53438 7.37685L12.875 3.22841L13.3062 2.89247L12.6922 2.10341L12.025 2.62216Z"
                  fill="black"
                  fillOpacity="0.85"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Календарь</span>
          </button>
        </div>
      </div>

      <div className="container">
        <div className="main__selects">
          <select value={year} onChange={handleChange}>
            {selectYears.map((year, i) => (
              <option key={i}>{year}</option>
            ))}
          </select>
          <select value={month} onChange={handleChange}>
            {selectMonths.map((month, i) => (
              <option key={i}>{month}</option>
            ))}
          </select>
        </div>

        <Switch>
          <Route path="/calendar" exact component={CalendarEvents} />

          <Route path="/events" exact component={AllEvents} />

          <Route path="/events/:id">
            <SignedUpEvent eventInfor={eventInfo} />
          </Route>
        </Switch>
      </div>
    </main>
  );
};
