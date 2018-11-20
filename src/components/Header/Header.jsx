import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <div className="container">
        <nav className="navbar navbar-static">
          <a className="navbar-brand" href="https://www.flaconi.de">
            <img src="https://cdn.flaconi.de/themes/flaconi/assets/20180403150354/images/svg/logo-flaconi.svg"
                 className="center"
                 width="190px"
                 height="40px"
                 alt="Logo"
            />
          </a>
        </nav>
      </div>
    )
  }
}
