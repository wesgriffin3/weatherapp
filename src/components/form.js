import React, { useState } from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={alert} type="button">
          Submit
        </button>
      </div>
    );
  }
}

export default Input;
