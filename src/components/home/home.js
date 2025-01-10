import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import DayNight from '../dayNight/dayNight'

export class home extends Component {
  render() {
    return (
      <div>
        <div className="card">
            <h3>Home</h3>
            <Link to='/cat'><h5>Are you a Cat?</h5></Link>
            <Link to='/weather'><h5 className='weather-link'>Weather</h5></Link>
        </div>
        <div className='day-n-night'>
          <DayNight />
        </div>
      </div>
    )
  }
}

export default home
