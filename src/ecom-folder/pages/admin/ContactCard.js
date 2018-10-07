import React from "react";

const ContactCard = (props) => {
    return(
        <div className="contactCard">
          <p className="contactCard__firstName">{props.info.firstName}</p>
          <p className="contactCard__lastName">{props.info.lastName}</p>
          <p className="contactCard__price">{props.info.email}</p>
          <p className="contactCard__work">{props.info.work}</p>
          <p className="contactCard__comments">{props.info.comments}</p>
        </div>
    )
}

export default ContactCard;
