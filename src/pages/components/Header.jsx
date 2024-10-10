import * as React from "react";

const Header = ({ headerImg }) => {
    return(
        <header className="App-header">
          <div className="Header-text">
            <div className="Header-text__main">
              Hello Im <b className="highlight1">Alain</b>!
            </div>
            <div className="Header-text__sub">
              an <b className="highlight2">Undergraduate Student</b>
            </div>
            <div className="Header-text__desc">
              I major in <b className="highlight2">Computer Science</b>, specializing in <br/>
              <b className="highlight2">Software Technology</b>. I currently study at <br/>
              De La Salle University, Manila.
            </div>
          </div>
          <div className="Header-image">
            <img src={headerImg} alt="ProfileImage"/>
          </div>
        </header>
    )
}


export default Header;