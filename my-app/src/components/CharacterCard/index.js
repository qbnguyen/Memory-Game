import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="" src={props.image} />
      </div>
      <span className="remove"></span>
    </div>
  );
}

export default CharacterCard;
