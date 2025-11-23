import './Hero.Module.scss';
import promoOne from '../../../../assets/promo/promoOne.jpg';
import promoTwo from '../../../../assets/promo/promoTwo.jpg';
import promoThree from '../../../../assets/promo/promoThree.jpg';
import { useState, useEffect, useRef } from 'react';

const SLIDE_INTERVAL = 5000; // 5 seconds

const slides = [promoOne, promoTwo, promoThree];

function Hero() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL);

        return () => resetTimeout();
    }, [current]);

    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === current ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                ))}

                <div className="hero-content">
                    <h1 className={current >= 0 ? 'fade-up' : ''}>
                        Short-term to medium-term rentals
                    </h1>
                    <p className={current >= 0 ? 'fade-up delay' : ''}>
                        We specialize in renting to people between moves, corporations, insurance companies, and business travelers.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;