import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
            <NavBar />
            <div className="center-wrapper">
                <div className="box">
                    <div className="form">
                        <h2>Contact Us</h2>
                        <div className="inputBox nameInputBox">
                            <input type="text" required="required" />
                            <span>Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox phoneInputBox">
                            <input type="number" required="required" />
                            <span>Phone No</span>
                            <i></i>
                        </div>
                        <div className="inputBox messageInputBox">
                            <input type="text" required="required" />
                            <span>Message</span>
                            <i></i>
                        </div>
                        <input type="submit" className="submitBtn" value="Submit" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
