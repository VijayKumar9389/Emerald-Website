import React from 'react';
import './PopupDialog.Module.scss';
import {MdClose} from "react-icons/md";
import {IoIosSend} from "react-icons/io";

interface PopupDialogProps {
    isOpen: boolean;
    onClose: () => void;
    listing: string
}

const PopupDialog: React.FC<PopupDialogProps> = ({ isOpen, onClose, listing }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h2>Contact Agent</h2>
                    <button className="back-button" onClick={onClose}>
                        <MdClose />
                    </button>
                </div>
                <form className="contact-form">
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

                    <button type="submit" className="btn">Send Message <IoIosSend className="icon" /></button>
                </form>
            </div>
        </div>
    );
};

export default PopupDialog;