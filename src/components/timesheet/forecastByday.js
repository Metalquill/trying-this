import React from 'react'
import './timesheet.css'

export default function ForecastByDay (theData, theDate, functions, temperatureFunction, timeZone) {
    return (
        <div>
            <p>{`  7am     12pm   4pm   10pm`}</p>
            <p>
                <strong className='nextDayForecast'>{
                    `${theDate}'s forecast: `
                }</strong>
                    <img 
                        className='icon-test' 
                        src={
                              functions.weatherIcontest(functions.iconForTheDay(functions.iconByHour(theData, temperatureFunction(theData), timeZone), '7:00'))
                            } alt="N/A" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <img 
                        className='icon-test' 
                        src={
                              functions.weatherIcontest(functions.iconForTheDay(functions.iconByHour(theData, temperatureFunction(theData), timeZone), '12:00'))
                            } alt="N/A" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <img 
                        className='icon-test' 
                        src={
                              functions.weatherIcontest(functions.iconForTheDay(functions.iconByHour(theData, temperatureFunction(theData), timeZone), '16:00'))
                            } alt="N/A" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <img 
                        className='icon-test' 
                        src={
                              functions.weatherIcontest(functions.iconForTheDay(functions.iconByHour(theData, temperatureFunction(theData), timeZone), '22:00'))
                            } alt="N/A" /></p>
        </div>
    )
}