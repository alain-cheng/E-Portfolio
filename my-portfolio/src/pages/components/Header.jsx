import * as React from "react";

const Header = ({ headerImg }) => {
    return(
        <header className="App-header">
          <div className="Header-text">
            <div className="Header-text__main">
              Hello Im <b>Alain</b>!
            </div>
            <div className="Header-text__sub">
              an <b>Undergraduate Student</b>
            </div>
            <div className="Header-text__desc">
              I major in <b>Computer Science</b>, specializing in <br/>
              <b>Software Technology</b>. I am also studying at <br/>
              De La Salle University, Manila, Philippines.
            </div>
          </div>
          <div className="Header-image">
            <img src={headerImg} alt="ProfileImage"/>
          </div>
        </header>
    )
}


export default Header;