// Write your code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-con">
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
          alt="home"
          className="home-logo"
        />
      </div>
    )
  }
}
export default Home
