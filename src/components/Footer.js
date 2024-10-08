import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-sm text-center sm:mt-10 sm:text-base ">
            <div className="py-2">
                <p>&copy; {currentYear} Ahmat | All Rights Reserved.</p>
                <p>Designed & Developed by Ahmat</p>
            </div>
        </footer>
    );
}

export default Footer;
