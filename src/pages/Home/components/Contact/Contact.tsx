import './Contact.Module.scss';
import {useState} from 'react';
import image from "../../../../assets/meet.svg";
import {IoIosSend} from "react-icons/io";
import SectionHeader from "../../../../components/Header/SectionHeader.tsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        budget: '',
        interest: '',
        email: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4005/customer/create', { // Ensure this matches your API route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    interest: formData.budget, // Assuming this maps to the interest field
                    question: formData.interest,
                }),
            });

            if (response.ok) {
                setStatusMessage('Your question has been submitted successfully.');
                setFormData({name: '', budget: '', interest: '', email: ''}); // Clear form fields
            } else {
                setStatusMessage('Failed to submit your question. Please try again.');
            }
        } catch (error) {
            setStatusMessage('An error occurred while submitting your question.');
        }
    };

    return (
        <div className="contact-container">
            <SectionHeader
                title="Contact Us"
                description="We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible."
            />
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
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="budget">
                        I'm interested in
                        <select
                            id="budget"
                            name="budget"
                            required
                            value={formData.budget}
                            onChange={handleChange}
                        >
                            <option value="">Select an option</option>
                            <option value="123-main-st-windsor">123 Main St, Windsor</option>
                            <option value="456-elm-st-windsor">456 Elm St, Windsor</option>
                            <option value="789-oak-st-windsor">789 Oak St, Windsor</option>
                            <option value="general-inquiry">General Inquiry</option>
                        </select>
                    </label>

                    <label htmlFor="interest">
                        My Question
                        <textarea
                            id="interest"
                            name="interest"
                            placeholder="What are you interested in?"
                            required
                            value={formData.interest}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>

                    <div className="form-footer">
                        <button type="submit" className="btn">
                            Submit
                            <IoIosSend className="icon"/>
                        </button>
                    </div>

                </form>
                {statusMessage && <p className="status-message">{statusMessage}</p>}
            </div>
        </div>
    );
}

export default Contact;