import React, { Component } from 'react'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../home/home'
import Cat from '../../cat/cat'
import Weather from '../../weather/weather'
import DayNight from '../../dayNight/dayNight';
import WeatherSpare from '../../weather/weatherSpare';

export class routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cat" element={<Cat/>} />
                <Route path="/weather" element={<Weather/>} />
                <Route path="/day" element={<DayNight/>} />
                <Route path="/test" element={<WeatherSpare/>} />
            </Routes>
        </BrowserRouter>
    )
  }
}


export default routes