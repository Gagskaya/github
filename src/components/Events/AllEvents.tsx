import { useSelector } from "react-redux";
import { selectEventsItems } from "../../store/selectors/events";
import { EventI } from "../../types/EventI";
import { SingleEvent } from "./SingleEvent";

export const AllEvents = () => {
  const events = useSelector(selectEventsItems);

  return (
    <div className="main__single-event-wrap">
      {events?.map((item: EventI) => (
        <SingleEvent {...item} key={item.id} />
      ))}
    </div>
  );
};
