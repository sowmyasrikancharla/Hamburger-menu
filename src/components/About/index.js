// Write your code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-con">
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
          alt="about"
          className="about-logo"
        />
      </div>
    )
  }
}
export default About
