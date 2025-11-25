import './Footer.Module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="home-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Or</h3>
                    <p>Email: <a href="mailto:Rhea@emeraldexecutivehousing.com">Rhea@emeraldexecutivehousing.com</a></p>
                    <p>Phone: +1 (778) 846-2702</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Emerald Executive Housing. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;