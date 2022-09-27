import React from "react";
import "./candidate.css";

const Candidates = (props) => {
  const options = [
    { text: "Fresher", handler: props.actionProvider.handleFresher, id: 1 },
    { text: "Experience", handler: () => {}, id: 2 },
    { text: "InternShip Experience", handler: () => {}, id: 3 }
  ];
  console.log(props);
  const optionsMarkup = options.map((option) => (
    <button
      className='learning-option-button'
      key={option.id}
      onClick={option.handler}>
      {option.text}
    </button>
  ));
  return <div className='learning-options-container'>{optionsMarkup}</div>;
};

export default Candidates;
