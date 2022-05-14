import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (<>
        <footer>
            <p>Copyright © {year}</p>
            <p>Made By Anurag Mohit</p>
        </footer>
    </>)
}


export default Footer;