import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import './BackButton.scss';
import logo from '../../../../assets/Logo.png';

interface BackButtonProps {
    onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
    <div className="btn-container">
        <button className="back-button" onClick={onClick}>
            <BsArrowLeft className="icon" />
        </button>
        <img src={logo} alt="Logo" className="listing-logo" />
    </div>
);

export default BackButton;