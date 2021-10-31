import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  const listItems = hobbies.map((hobby) =>
  <li>{hobby}</li>
);
  if (listItems.length === 0) {
    return null;
  } return (
  <div>
    <h4 class="hobbyHeader">Hobbies</h4>
    <ul className="listItem">
      {listItems}
    </ul>
  </div>  

  )
}

export default HobbyList;
