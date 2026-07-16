import * as React from "react";

const Header = ({ headerImg }) => {
    return(
        <header className="App-header">
          <div className="Header-text">
            <div className="Header-text__main">
              Alain Cheng
            </div>
            <div className="Header-text__sub">
            </div>
            <div className="Header-text__desc">
              I majored in <b className="highlight1">Computer Science</b>, specializing in <br/>
              <b className="highlight1">Software Technology</b>.
            </div>
          </div>
          <div className="Header-image">
            <img src={headerImg} alt="ProfileImage"/>
          </div>
        </header>
    )
}


export default Header;