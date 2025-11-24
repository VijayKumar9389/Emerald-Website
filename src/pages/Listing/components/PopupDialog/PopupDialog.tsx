import React, { useState } from 'react';
import './PopupDialog.Module.scss';
import { MdClose } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

interface PopupDialogProps {
    isOpen: boolean;
    onClose: () => void;
    listing: string;
}

const PopupDialog: React.FC<PopupDialogProps> = ({ isOpen, onClose, listing }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    if (!isOpen) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://www.trackerinventory.com/customer/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    interest: listing,
                    question: formData.message
                }),
            });

            if (response.ok) {
                setStatusMessage('Your question has been submitted successfully.');
                setFormData({ name: '', email: '', message: '' });
                onClose(); // <-- this will close the popup
            } else {
                setStatusMessage('Failed to submit your question. Please try again.');
            }
        } catch (error) {
            setStatusMessage('An error occurred while submitting your question.');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h2>Contact Agent</h2>
                    <button className="back-button" onClick={onClose}>
                        <MdClose />
                    </button>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
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

                    <label htmlFor="listing">
                        I'm interested in
                        <h5>{listing}</h5>
                    </label>

                    <label htmlFor="message">
                        My Question
                        <textarea
                            id="message"
                            name="message"
                            placeholder="What are you interested in?"
                            required
                            value={formData.message}
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
                            Send Message <IoIosSend className="icon" />
                        </button>
                    </div>

                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default PopupDialog;