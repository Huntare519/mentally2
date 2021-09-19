import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./Contacts.css";

function ContactCard(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Contacts
          name="Elon Musk"
          image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        />
      </header>
    </div>
  );
}

function Contacts({ name, image }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="profile" src={image} />
      </div>
      <div className="body-container">
        <div className="name">Elon Musk</div>
        <p className="body-text">
          Email Address: <br></br>
          Emergency Contact:
          <br />
          Message:
          <br />
        </p>
      </div>
      <br className="break" />
    </div>
  );
}

export default ContactCard;
