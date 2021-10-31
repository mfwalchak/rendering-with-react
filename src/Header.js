import React from "react";
import "./Header.css";
//Header renders the image of the kitten, its name, and birthday. It should also accept name, imageSrc, and birthday as props
function Header({ name, imageSrc, birthday}) {
  return (
    <div className="header">
      <img className="headshot" src={imageSrc} alt="a cutie kitty" />
      <div className="headerItem">
        <p style={{ fontSize: "72px"  }}>{name}</p>
        <p style={{ fontSize: "54px"  }}>{birthday}</p>
      </div>
    </div>
    
  )
}

export default Header;
