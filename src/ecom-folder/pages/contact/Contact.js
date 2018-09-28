import React from 'react';

const Contact = () => {
    return(
        <div className="formContainer">
            <form action="http://localhost:8080/formSubmit" method="POST" name="mainForm" className="contactForm">
                <h2 className="contactForm__heading">Contact Us:</h2>
                    
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
                    </div>

                
                    <div className="formLastName">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required/>
                    </div>

                
                    <div className="formEmail">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" required/>
                    </div>

                    
                    <div className="formWork">
                        <label htmlFor="work">Place of Work:</label>
                        <input type="text" name="work" id="work" placeholder="Place of Work" required/>
                    </div>

                
                    <div>
                        <label htmlFor="comments" className="commentForm">Comments:</label>
                        <textarea name="comments" id="comments" rows="auto" cols="auto" placeholder="Comments" required></textarea>
                    </div>

                    
                    <div className="formSubmit">
                        <input className="submit" type="submit" value="Submit" />
                    </div>
            </form>
        </div>
    );
}

export default Contact;
