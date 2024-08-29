import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import './BackButton.scss';

interface BackButtonProps {
    onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
    <button className="back-button" onClick={onClick}>
        <BsArrowLeft />
    </button>
);

export default BackButton;