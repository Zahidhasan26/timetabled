import React from "react";

const Event = (props) => {
  const handleClick = () => {
    window.open(props.link, "_blank"); // Open link in new tab
  };

  return (
    <td className={`event ${props.color}`} >
      {props.image && <img src={props.image} alt={props.event} className="event-image" />}
      <h5>{props.event}</h5>
      {props.detail && <h6>{props.detail}</h6>}
      <button onClick={handleClick}>See More</button>
    </td>
  );
};

export default Event;