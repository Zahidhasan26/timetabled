import React from "react";


const Event = (props) => {

  const handleClick = () => {
   const userConfirmed = window.confirm(`Buy tickets for $50 for ${props.event}?`);

    if (userConfirmed) {
      alert("Tickets purchased!");
    } else {
      alert("Maybe next time!");
    }
  };
    return (
        <td className={`Event ${props.color}`} onClick={handleClick}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </td>
    )
}
export default Event;