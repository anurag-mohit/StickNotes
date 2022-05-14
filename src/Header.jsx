import React from "react";
import Logo from "./Logo2/Logo.png";
const Header = () => {
    return (<>
     <div className="header">
        <img src={Logo} alt="logo" width="90" height="110"/>
        <h1>Important Notes</h1>
        <div className="credits_div">
        <p className="credits">Made By Anurag Mohit</p>
        </div>
     </div>
    </>)
}

export default Header;