import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="row ">
        <h3 className="city">Houston</h3>
        <div className="card">
          <div className="card-body">
            <div className="card-img-overlay number">
              <h3>100</h3>
            </div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.denofgeek.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fragnarok.jpg%3Ffit%3D1280%252C704&f=1&nofb=1"
              className="card-img-top"
              alt="..."
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
