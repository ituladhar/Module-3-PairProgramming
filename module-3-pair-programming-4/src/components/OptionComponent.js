import React from "react";

function OptionComponent({ option, onClick }) {

  return (
    <div className="main">
      <button  key={option.value} onClick={onClick} disabled={option.selected}>
        {option.value}
      </button>
   
    </div>
  );
}

export default OptionComponent;
