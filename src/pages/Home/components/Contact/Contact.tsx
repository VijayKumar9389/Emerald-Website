import './Contact.Module.scss';
import React from 'react';
import image from "../../../../assets/meet.svg";
import {IoIosSend} from "react-icons/io";

const Contact = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="contact-container">
            <div className="header-container">
                <h1>Get in Touch with Us</h1>
                <p>
                    Whether you're looking for more information or need assistance with our services, we're here to help.
                    Reach out to us for personalized support and prompt responses.
                </p>
            </div>
            <div className="contact">
                <img src={image} alt="Meet and Greet" className="contact-image"/>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">
                        My name is
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </label>

                    <label htmlFor="budget">
                        I'm interested in
                        <select
                            id="budget"
                            name="budget"
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="address1">123 Main St, Windsor</option>
                            <option value="address2">456 Elm St, Windsor</option>
                            <option value="address3">789 Oak St, Windsor</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </label>

                    <label htmlFor="interest">
                        My Question
                        <textarea
                            id="interest"
                            name="interest"
                            placeholder="What are you interested in?"
                            required
                        ></textarea>
                    </label>

                    <label htmlFor="email">
                        Please contact me at
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </label>

                    <button type="submit" className="btn">
                        Submit
                        <IoIosSend className="icon"/>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;