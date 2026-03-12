import React, { useEffect, useState } from 'react'
import './timesheet.css'
import { data, urlInput } from '../weather/urls'
import * as weatherFunctions from './helperfunctions'

// 30 minute intervals of activity
// Opex = student management operational code
// Capex = student management product code
// Opex is user support, work on prod bugs, regression testing, release activities, tech debt, all meetings on student management topics
// Capex = new feature work, development, testing, planned improvements, meetings about new features
//3.25 minutes = 0.06 ,7.5 minutes = 0.125 ,15 mins = 0.25, 30 mins = 0.5, 45 mins = 0.75 (this one isn't needed though)

// 10.7.2025
export default function Timesheet() {

const title = "Whats the weather today?"//"TimeSheet"
const initDate = new Date()
const todaysDate = initDate.toLocaleDateString()
const [cityValue, setCityValue] = useState('')
const [forecast, setForecast] = useState('')
const [isLoaded, setIsLoaded] = useState(false)
const [dateHere, setDateHere] = useState(false)
const [otherError, setOtherError] = useState('')
const [twentyfourHours, setTwentyfourHours ] = useState('')
const [fortyEightHours, setFortyEightHours] = useState('')
const [seventyTwoHours, setSeventyTwoHours] = useState('')

const nevertrue = false;

     useEffect(() => {
                 async function fetchWeather() {
                     const matchedCity = data.find(city => cityValue.charAt(0).toUpperCase() + cityValue.slice(1) === city.name || cityValue === city.name);
                     
                     if (matchedCity) {
                         try {
                             const weatherUrl = urlInput(
                                 matchedCity.lat, 
                                 matchedCity.long, 
                                 matchedCity.altitude, 
                                 matchedCity.timezone, 
                                 matchedCity.date
                             ).weatherApiUrl;
                             
                             const res = await fetch(weatherUrl);
                             const json = await res.json();
                             setForecast(json.properties.timeseries.slice(0, 1));
                             setTwentyfourHours(json.properties.timeseries.slice(0, 24))
                             setFortyEightHours(json.properties.timeseries.slice(11, 48))
                             setSeventyTwoHours(json.properties.timeseries.slice(36, 72))
                             setIsLoaded(true);
                             setDateHere(false);
                         } catch (error) {
                             setOtherError('Fetch weather Error! ' + error);
                             setIsLoaded(false);
                         }
                     } else {
                         setIsLoaded(false);
                         setForecast('');
                     }
                 }
                 
                 if (cityValue) {
                     fetchWeather();
                 }
            }, [cityValue])



const handleCitySubmit = () => {
    console.log("City submitted")
    console.log("the output is", cityValue)
    data.map((city) => {
        if (cityValue.charAt(0).toUpperCase() + cityValue.slice(1) === city.name || cityValue === city.name) {
            console.log(`city name: ${city.name}, city lat: ${city.lat}, city long: ${city.long}, city altitude: ${city.altitude}, city timezone: ${city.timezone}, city date: ${city.date}`)
            console.log("City found in data")
        
        } else {
            console.log("City not found in data")
        }
    })
     setDateHere(false)
}

const myTestArray = ["clear_day 5:00", "cloudy 7:00", "fog 12:00", "partlycloudy 15:00", "rain 18:00", "snow 21:00", "thunderstorm 23:00"]
const myotherTestArray = myTestArray.filter(value => value.includes('7:00'))
console.log("my other test array: ", myotherTestArray)


const handleCityChange = (event) => {
    setCityValue(event.target.value)
    if (event.target.value.length > 2) {
        setDateHere(true)
    } else {        
        setDateHere(false)
    }
}


return (
    <div className='origin-container'>
        <div className='card'>
            <h5>{title}</h5>{todaysDate}
            <div className='card-content'>
                <input
                    className='city-input'
                    placeholder='Enter city here'
                    value={cityValue}
                    onChange={handleCityChange}
                ></input>
                <button className='submit-btn' onClick={handleCitySubmit} hidden={!nevertrue}>Submit</button>  
            </div>
        {/* <div className='card'><h5>{title}</h5>
            {todaysDate}
            <div className='timesheetValues'>
                <p className='fridge'>Opex: {opexTotal}</p>
                <p>Capex: {capexTotal}</p>
                <p>Total hours: { opexTotal + capexTotal}</p>
            </div>  */}
            {/* <div className='otherSide'>
            <p>Some Value</p>
            <p> another Value</p>
            <p>Last one</p>
            </div> */}
        </div>
        <p hidden={!dateHere}><strong>Hey I'm loading here!!...</strong></p>
        <div className='second-card' hidden={!isLoaded}>
              {data.map((city) => {
                    if (cityValue === city.name) {
                        return (
                            <div key={city.name} style={{marginTop: '10px'}}>
                                {/* <a 
                                    href={urlInput(city.lat, city.long, city.altitude, city.timezone, city.date).weatherApiUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{display: 'block', marginBottom: '10px'}}
                                >
                                    View Weather API for {city.name}
                                </a> */}
                                {!isLoaded && !otherError && <p>Loading weather data...</p>}
                                {otherError && <p style={{color: 'red'}}>{otherError}</p>}
                                {isLoaded && forecast && forecast.length > 0 && (
                                    
                                    <div>
                                        <p><strong>{city.name}</strong><img className='icon-test' src={weatherFunctions.weatherIconOutput(forecast)} alt='Icon error'></img></p>
                                        {forecast.map(item => (
                                            <div key={item.time} style={{marginTop: '10px'}}>
                                                <p><strong>Temperature:</strong> {item.data.instant.details.air_temperature}°C</p>
                                                <strong>Forecast:</strong> {weatherFunctions.weatherDesciption(forecast)}

                                            {console.log('icons by hour: ', weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)))}
                                                <ul>
                                                    <li className='minAndMaxed'>
                                                        Max:  <font className='hot'>{
                                                            weatherFunctions.temperatureByDay(twentyfourHours, weatherFunctions.temperatureToday(twentyfourHours), false, fortyEightHours, seventyTwoHours)
                                                        } </font> °C&nbsp;
                                                        Min: <font className='cool'>{
                                                            weatherFunctions.temperatureByDay(twentyfourHours, weatherFunctions.temperatureToday(twentyfourHours), true, fortyEightHours, seventyTwoHours)
                                                        } </font> °C
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li><strong>Wind Speed:</strong> {Math.round(item.data.instant.details.wind_speed * 3.6)} km/s</li>
                                                    <li><strong>Precipitation:</strong> {item.data.next_1_hours ? item.data.next_1_hours.details.precipitation_amount : 'N/A'} mm</li>
                                                    <li><strong>Pressure:</strong> {item.data.instant.details.air_pressure_at_sea_level} hPa</li>
                                                    <li><strong>Humidity:</strong> {item.data.instant.details.relative_humidity} %</li>
                                                </ul>
                                            </div>
                                        ))}
                                        <div>
                                            {`${weatherFunctions.whatsTomorrow}'s weather: max: `}
                                            <font className='hot'>{
                                                weatherFunctions.temperatureByDay(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours), false, fortyEightHours, seventyTwoHours)
                                            }</font>
                                            {` , min: `}
                                            <font className='cool'>{
                                                weatherFunctions.temperatureByDay(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours), true, fortyEightHours, seventyTwoHours)
                                            }</font>
                                            <p>{`  7am     12pm   7pm   11pm`}</p>
                                            <p><strong className='nextDayForecast'>{`${weatherFunctions.whatsTomorrow}'s forecast: `}</strong><img 
                                                className='icon-test' 
                                                src={
                                                    weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '7:00'))
                                                } alt="Weather Icon" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                <img 
                                                    className='icon-test' 
                                                    src={
                                                        weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '12:00'))
                                                    } alt="Weather Icon" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                <img 
                                                    className='icon-test' 
                                                    src={
                                                        weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '19:00'))
                                                    } alt="Weather Icon" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                <img 
                                                    className='icon-test' 
                                                    src={
                                                        weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '23:00'))
                                                    } alt="Weather Icon" /></p>
                                        </div>
                                        <div>
                                            {`${weatherFunctions.whatsDayAfterTomorrow}'s weather: max: `}
                                            <font className='hot'>{
                                                weatherFunctions.temperatureByDay(seventyTwoHours, weatherFunctions.temperatureForAnyDay(seventyTwoHours), false, fortyEightHours, seventyTwoHours)
                                            }</font>{` , min: `}
                                            <font className='cool'>{
                                                weatherFunctions.temperatureByDay(seventyTwoHours, weatherFunctions.temperatureForAnyDay(seventyTwoHours), true, fortyEightHours, seventyTwoHours)
                                            }</font>
                                            <p>{`  7am     12pm   7pm   11pm`}</p>
                                            <p><strong className='nextDayForecast'>{`${weatherFunctions.whatsDayAfterTomorrow}'s forecast: `}</strong><img 
                                                className='icon-test' 
                                                src={
                                                    weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(seventyTwoHours, weatherFunctions.temperatureForAnyDay(seventyTwoHours)), '7:00'))
                                                } alt="Weather Icon" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                <img 
                                                    className='icon-test' 
                                                    src={
                                                        weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(seventyTwoHours, weatherFunctions.temperatureForAnyDay(seventyTwoHours)), '12:00'))
                                                    } alt="Weather Icon" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                <img 
                                                    className='icon-test' 
                                                    src={
                                                        weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(seventyTwoHours, weatherFunctions.temperatureForAnyDay(seventyTwoHours)), '19:00'))
                                                    } alt="Weather Icon" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                                <img 
                                                    className='icon-test' 
                                                    src={
                                                        weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(seventyTwoHours, weatherFunctions.temperatureForAnyDay(seventyTwoHours)), '23:00'))
                                                    } alt="Weather Icon" /></p>
                                        </div>
                                        <div>
                                           {/* <p>{'7am:'} <img className='icon-test' src={weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '7:00'))} alt="Weather Icon" /></p>
                                            <p>{'Midday:'}<img className='icon-test' src={weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '12:00'))} alt="Weather Icon" /></p>
                                            <p>{'7pm:'}<img className='icon-test' src={weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '19:00'))} alt="Weather Icon" /></p>
                                            <p>{'11pm:'}<img className='icon-test' src={weatherFunctions.weatherIcontest(weatherFunctions.iconForTheDay(weatherFunctions.iconByHour(fortyEightHours, weatherFunctions.temperatureForTomorrow(fortyEightHours)), '23:00'))} alt="Weather Icon" /></p> */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    }  
                    return null;
                })}
        </div>
    </div>
);


}
