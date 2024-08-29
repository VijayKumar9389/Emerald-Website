import './Footer.Module.scss'; // Import the SCSS file

const Footer = () => {
    return (
        <div className="home-footer">
            <div className="custom-shape-divider-bottom-1724972817">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Or</h3>
                    <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Emerald Executive Housing. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;