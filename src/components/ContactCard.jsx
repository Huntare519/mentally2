import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./Contacts.css";

function ContactCard(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Contacts
          name={props.name}
          image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
          email={props.email}
        />
      </header>
    </div>
  );
}

function Contacts({ name, image, email }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="profile" src={image} />
      </div>
      <div className="body-container">
        <div className="name">{name}</div>
        <p className="body-text">
          Email Address: {email}
          <br></br>
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
