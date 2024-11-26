// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-con">
        <Link to="/">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
            alt="website logo"
            className="logo"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              className="logo"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="ham" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="main-con">
              <button data-testid=" closeButton">
                <IoMdClose className="cross" onClick={() => close()} />
              </button>
              <ul className="Popup-con">
                <Link to="/">
                  <li className="flex">
                    <AiFillHome className="icons" />
                    <h2>Home</h2>
                  </li>
                </Link>
                <Link to="/about">
                  <li className="flex">
                    <BsInfoCircleFill className="icons" />
                    <h2>About</h2>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default Header
