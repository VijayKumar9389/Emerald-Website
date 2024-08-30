import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import './BackButton.scss';

interface BackButtonProps {
    onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
    <div className="btn-container">
        <button className="back-button" onClick={onClick}>
            <BsArrowLeft className="icon" />
        </button>
    </div>
);

export default BackButton;