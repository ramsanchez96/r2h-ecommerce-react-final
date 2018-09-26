import React from 'react';

const Contact = () => {
    return(
        <form action="#" method="GET" name="mainForm" onsubmit="return validateForm()">
            <h2>Contact Me:</h2>
                
                <div>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                </div>

               
                <div className="formLastName">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                </div>

               
                <div className="formEmail">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>

                
                <div className="formWork">
                    <label for="work">Place of Work:</label>
                    <input type="text" name="work" id="work" placeholder="Place of Work" />
                </div>

               
                <div>
                    <label for="comments" className="commentForm">Comments:</label>
                    <textarea name="comments" id="comments" rows="auto" cols="auto" placeholder="Comments"></textarea>
                </div>

                
                <div className="formSubmit">
                    <input className="submit" type="submit" value="Submit" />
                </div>
        </form>
    );
}

export default Contact;
