import eventImg from "../../assets/icons/event-img.png";

export const SingleEvent = () => {
  return (
    <div className="main__single-event">
      <div className="main__single-event-header">
        <h6>Событие 1</h6>
        <button>Больше</button>
      </div>
      <div>
        <img src={eventImg} alt="" />
      </div>
      <div className="main__single-event-footer">
        <h6>05.10.2021</h6>
      </div>
    </div>
  );
};
