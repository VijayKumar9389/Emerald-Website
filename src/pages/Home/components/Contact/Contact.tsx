import './Contact.Module.scss';
import {useState} from 'react';
import {IoIosSend} from "react-icons/io";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        budget: '',
        interest: '',
        email: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4005/customer/create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    interest: formData.budget,
                    question: formData.interest,
                }),
            });

            if (response.ok) {
                setStatusMessage('Your question has been submitted successfully.');
                setFormData({name: '', budget: '', interest: '', email: ''});
            } else {
                setStatusMessage('Failed to submit your question. Please try again.');
            }
        } catch (error) {
            setStatusMessage('An error occurred while submitting your question.');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-overlay"/>
            <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">
                        My name is
                        <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name}
                               onChange={handleChange}/>
                    </label>

                    <label htmlFor="budget">
                        I'm interested in
                        <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="123-main-st-windsor">123 Main St, Windsor</option>
                            <option value="456-elm-st-windsor">456 Elm St, Windsor</option>
                            <option value="789-oak-st-windsor">789 Oak St, Windsor</option>
                            <option value="general-inquiry">General Inquiry</option>
                        </select>
                    </label>

                    <label htmlFor="interest">
                        My Question
                        <textarea id="interest" name="interest" placeholder="What are you interested in?" required
                                  value={formData.interest} onChange={handleChange}></textarea>
                    </label>

                    <label htmlFor="email">
                        Please contact me at
                        <input type="email" id="email" name="email" placeholder="Your Email" required
                               value={formData.email} onChange={handleChange}/>
                    </label>

                    <div className="form-footer">
                        <button type="submit" className="btn">
                            Submit <IoIosSend className="icon"/>
                        </button>
                    </div>

                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;