import React ,{ useEffect, useState} from 'react'
import './weather.css'
import { Link } from 'react-router-dom'
import MySVGIcons from './MySVGIcons'
import { windByDirection } from './windDirection'
import { WeatherPhotoChange } from '../weatherPhoto'
import { URLs } from './urls'
import Spinner from './spinner'
import { customStyles } from './customStyles'
import { dayName } from './days'

export default function Weather() {
const [isDevMode, setIsDevMode] = useState(false)
const [isLoaded, setIsLoaded] = useState(false)
const [forecast, setForecast] = useState('')
const [lastUpdated , setLastUpdated] = useState('')
const [dataUpdated, setDataUpdated] = useState('')
const [sunUp, setSunUp] = useState('')
const [sunDown, setSunDown] = useState('')
const [lengthOfDay, setLengthOfDay] = useState('')
const [sunUpAlt, setSunUpAlt] = useState('')
const [sunDownAlt, setSunDownAlt] = useState('')
// const [lengthOfDayAlt, setLengthOfDayAlt] = useState('')
const [twentyfourHours, setTwentyfourHours ] = useState('')
const [fortyEightHours, setFortyEightHours] = useState('')
const [seventyTwoHours, setSeventyTwoHours] = useState('')
const [isTeReo, setIsTeReo ] = useState(false)
const [tomorrowDay, setTomorrowDay] = useState('')
const [dayAfterTomorrowDay, setDayAfterTomorrowDay] = useState('')
const [dayLoaded, setDayLoaded] = useState(false)
const [anError, setAnError] = useState('')
const [otherError, setOtherError] = useState('')
// const [someError, setSomeError] = useState('')

// globally defined strings
const unavailable = 'Unavailable'
const currentDate = new Date()
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);


useEffect(() => {
    async function fetchLastUpdate() {
        await fetch(URLs.lastUpdatedWeatherApiUrl)
         .then(res => res.json())
         .then(json => {
                 setLastUpdated(json.last_update)
         })
         .catch((error) => {
             console.error('Fetch update Error! ', error)
         })
     }
     async function fetchWeather() {
        await fetch(URLs.weatherApiUrl)
             .then(res => res.json())
             .then(json => {
                 setForecast(json.properties.timeseries.slice(0, 1))
                 setTwentyfourHours(json.properties.timeseries.slice(0, 24))
                 setFortyEightHours(json.properties.timeseries.slice(11, 48))
                 setSeventyTwoHours(json.properties.timeseries.slice(36, 72))
                 setDataUpdated(json.properties.meta.updated_at)
                 setIsLoaded(true)
             })
             .catch((error) => {
                setOtherError('Fetch weather Error! ', error)
             })
     }

     async function fetchSunriseIo() {
        await fetch(URLs.sunriseSunsetIoUrl)
            .then(res => res.json())
            .then(json => {
                setSunUp(json.results.sunrise)
                setSunDown(json.results.sunset)
                setLengthOfDay(json.results.day_length + ' hrs')
            })
     }

     async function fetchSunriseAlt() {
        try{
            await fetch(URLs.sunriseSunsetApiUrl)
                .then(res => res.json())
                .then(json => {
                    setSunUpAlt(json.results.sunrise)
                    setSunDownAlt(json.results.sunset)
                })
            } catch {
                setAnError("fetch sunrise alt has failed")
            }
     }  

     async function getDayOfTheWeek() {
        const dayNumber = tomorrow.getDay()
        const dayNameValues = Object.values(dayName)
        Object.keys(dayName).forEach(async function(key, index){
            if (dayNumber.toString() === key){
                setTomorrowDay(dayNameValues[index].toString())
                setDayLoaded(true)
            }
          })
     }

     async function getDayAfterTomorrow() {
        const dayNumber = dayAfterTomorrow.getDay()
        const dayNameValues = Object.values(dayName)
        Object.keys(dayName).forEach(async function(key, index){
            if (dayNumber.toString() === key){
                setDayAfterTomorrowDay(dayNameValues[index].toString())
                setDayLoaded(true)
            }
          })
     }

    //  async function fetchDayLengthAlt() {
    //     await fetch(URLs.sunriseSunsetApiUrlformatted)
    //     .then(res => res.json)
    //     .then(json => {
    //         setLengthOfDayAlt(json.results.day_length)
    //         setIsLoaded(true)
    //     })
    //     .catch((error) => {
    //         console.error('Fetch day length Error! ', error)
    //         setSomeError('Fetch day length Error')
    //     })
    //  }
    
    fetchLastUpdate()
    fetchWeather()
    fetchSunriseIo()
    fetchSunriseAlt()
    getDayOfTheWeek()
    getDayAfterTomorrow()
    // fetchDayLengthAlt()
    
}, [])

if (!isLoaded) {
    console.log('data hasnt loaded yet')
    return <Spinner/>
    
    
  }

  // Arrow function garden
const weatherDesciption = () => {
    const weatherSymbolName = forecast.map((item) => item.data.next_1_hours.summary.symbol_code.replace('_', ' '))
    if (weatherSymbolName.indexOf('_') > -1 ) {
        return weatherSymbolName.replace('_', ' ')
    } else {
        return weatherSymbolName
    }
  } 

//    console.log("fortyEightHours: ", fortyEightHours)
//    console.log("seventyTwoHours: ", seventyTwoHours)
//   const weatherDesciptionTomorrow = () => {
//     // Firgure out the most frequent weather symbol name and then return that as a string
//     // Match that string with the IconOutput and out put that as the symbol
//     // Add highs and lows
//     const theForecastTomorrow = fortyEightHours.slice(0, 1)
//     const weatherSymbolName = forecast.map((item) => item.data.next_1_hours.summary.symbol_code.replace('_', ' '))
//     if (weatherSymbolName.indexOf('_') > -1 ) {
//         return weatherSymbolName.replace('_', ' ')
//     } else {
//         return weatherSymbolName
//     }
//   } 
console.log("day name loaded: ",dayLoaded)
 const windDirection = () => {
    const windData = []
    forecast.forEach((item) => {windData.push(parseInt(item.data.instant.details.wind_from_direction))})
    return windByDirection(windData)
  }

  const weatherIconOutput = () => {
    const currentWeatherIcon = forecast.map((b) => b.data.next_1_hours.summary.symbol_code)
        return MySVGIcons[currentWeatherIcon]
  }

   const weatherPhoto = () => {
    const currentWeatherIcon = forecast.map((b) => b.data.next_1_hours.summary.symbol_code)
    const convertWeatherIconObjToString = currentWeatherIcon.toString()
    return WeatherPhotoChange(convertWeatherIconObjToString)
  }

  const temperatureToday = () => {
    // Checks dates to see if they are the same as the current date
    // Pushes those matching dates into an array and then returns the length
    // of that array to be used to slice the response data
    const createDatesFromObjects = []
    const matchingDates = [];
    
    const checkTime = twentyfourHours.map((times) => times.time)
    checkTime.forEach((a) => createDatesFromObjects.push(new Date(a)))
    createDatesFromObjects.forEach(date => {
        if (date.toLocaleDateString() === currentDate.toLocaleDateString()) {
            matchingDates.push(date);
        }
    });
    return matchingDates.length

}
const temperatureForTomorrow = () => {
    // Checks dates to see if they are the same as the added date
    // Pushes those matching dates into an array and then returns the length
    // of that array to be used to slice the response data
    const createDatesFromObjects = []
    const matchingDates = [];
    const checkTime = fortyEightHours.map((times) => times.time)
    checkTime.forEach((a) => createDatesFromObjects.push(new Date(a)))
    createDatesFromObjects.forEach(date => {
        if (date.toLocaleDateString() === tomorrow.toLocaleDateString()) {
            matchingDates.push(date);
        }
    });
    return matchingDates.length
  }
    

  const temperatureForAnyDay = () => {
    // Checks dates to see if they are the same as the added date
    // Pushes those matching dates into an array and then returns the length
    // of that array to be used to slice the response data
    const createDatesFromObjects = []
    const matchingDates = [];
    const checkTime = seventyTwoHours.map((times) => times.time)
    checkTime.forEach((a) => createDatesFromObjects.push(new Date(a)))
    createDatesFromObjects.forEach(date => {
        if (date.toLocaleDateString() === dayAfterTomorrow.toLocaleDateString()) {
            matchingDates.push(date);
        }
    });
    console.log('Matching Dates length = ', matchingDates.length)
    return matchingDates.length
  }

//   console.log(" amount of temps in tomorrows array = ", temperatureForAnyDay(tomorrow, fortyEightHours))
//   console.log(" amount of temps in day after tomorrows array = ", temperatureForAnyDay(dayAfterTomorrow, seventyTwoHours))

  const temperatureByDay = (theData, theDate, minimum ) => {
    const theDaysTemp = theData.slice(0, theDate)
    const maxTemp = []
    const minTemp = []
    if(!minimum) {
        theDaysTemp.forEach((items) => {maxTemp.push(parseInt(items.data.instant.details.air_temperature))})
        if (theDate === temperatureForTomorrow()) {
            console.log(" tomorrow temps: ", maxTemp)
        } else if (theDate === temperatureForAnyDay()) {
            console.log("DAT temps: ", maxTemp)
        }
        return Math.max(...maxTemp)
    } else {
        theDaysTemp.forEach((items) => {minTemp.push(parseInt(items.data.instant.details.air_temperature))})
        return Math.min(...minTemp)
    }
    
  }

  // Other way to do this instead of temptoday to get days of the week etc
  const days = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let whatsToday = days[currentDate.getDay()]
  let whatsTomorrow = days[tomorrow.getDay()]
  let whatsDayAfterTomorrow = days[dayAfterTomorrow.getDay()]

  console.log('today be: ', whatsToday)
  console.log('Tomorrow be: ', whatsTomorrow)
  console.log('Day after tomorrow be: ', whatsDayAfterTomorrow)

     
 console.log(`${tomorrowDay} weather: max: ${temperatureByDay(fortyEightHours, temperatureForTomorrow(), false)} , min: ${temperatureByDay(fortyEightHours, temperatureForTomorrow(), true)}`)
       
 console.log(`${dayAfterTomorrowDay} weather: max: ${temperatureByDay(seventyTwoHours, temperatureForAnyDay(), false)} , min: ${temperatureByDay(seventyTwoHours, temperatureForAnyDay(), true)}`) 

  const sunriseApiFallback = () => {
    if (sunUp.length > 1) {
        return sunUp
    } else if (sunUp.length < 1 && sunUpAlt.length > 1) {
        const riseDate = new Date(sunUpAlt)
        const riseResult = riseDate.toLocaleTimeString()
        return riseResult
    } else {
        return unavailable
    }
  }

  const sunsetApiFallback = () => {
    if (sunDown.length > 1) {
        return sunDown
    } else if (sunDown.length < 1 && sunDownAlt.length > 1) {
        const fallDate = new Date(sunDownAlt)
        const fallResult = fallDate.toLocaleTimeString()
        return fallResult
    } else {
        return unavailable
    }
  }

  const dayLengthFallback = () => {
    if (lengthOfDay.length > 1) {
        return lengthOfDay
        // } else if (lengthOfDay.length < 1 && lengthOfDayAlt.length > 1) {
       // return lengthOfDayAlt + ' hrs'
    } else if (lengthOfDay.length < 1 ) {
        return unavailable
    } else {
        return unavailable
    }
  }

  const handleClick = () => {
    if (isTeReo === false) {
        setIsTeReo(true)
    } else 
        setIsTeReo(false)
  }
  
  return (
    <div>
        <div className="secret-dev" hidden={!isDevMode}>
            <div className='card dev-card'>
                <div className='dev-title'>Dev testing card</div>
                <img className='weather-test' src={weatherIconOutput()} alt="testTwo"></img> 
                <button style={customStyles.btnStyle}><a className="status" href={URLs.apiHealthUrl}>Check status</a></button>
                <p>Current errors: <b className='hot'>{anError.length >= 1 ? anError : ""}{otherError.length >=1 ? otherError : ""}{anError.length < 1 && otherError.length < 1 ? "no current errors" : ""}</b></p>
                {/* <li className='hot'>{someError}</li> */}
                <p>Data was updated {new Date (dataUpdated).toLocaleDateString() + " " + new Date (dataUpdated).toLocaleTimeString()}</p>
                <br></br>
                <p>Tomorrow will be: {tomorrowDay}</p>
                <p>Day after tomorrow will be: {dayAfterTomorrowDay}</p>
            </div>
        </div>
        <div className='card weather-card'>
            <div className='card-image waves-effect waves-block waves-light'>
            <img alt='sky' style={customStyles.imgStyle} className="activator" src={weatherPhoto()}></img>
            </div>
                <div className='card-content'>
                    <span className='card-activator grey-text text-darken-4'>
                        <h4 className='city'>{isTeReo ? 'Ōtautahi' : 'Christchurch'} &nbsp; <button className='teReo' onClick={handleClick}>{isTeReo ? 'In English' : 'Try Te Reo'}</button></h4> 
                        <ul>
                        <li className='update'>
                            <small>
                                Last updated: {
                                   new Date (lastUpdated).toLocaleDateString() + " "
                                }
                                at: {
                                    new Date (lastUpdated).toLocaleTimeString()
                                } 
                            </small>
                        </li>
                        </ul>
                    </span>
                    <ul>
                        <div className='temperature'>
                            {forecast.map(item => (
                                <li key={item.time}>
                                    <b>{item.data.instant.details.air_temperature}</b> °C  <img className='pic-test' src={weatherIconOutput()} alt='Icon error'></img>
                                    <b className='weather-title'>{weatherDesciption()}</b>
                                </li> 
                            ))}
                        </div>
                        <li className='minAndMax'>
                            Max:  <font className='hot'>{temperatureByDay(twentyfourHours, temperatureToday(), false)} </font> °C&nbsp;
                            Min: <font className='cool'>{temperatureByDay(twentyfourHours, temperatureToday(), true)} </font> °C
                        </li>
                        <div className='rain'>
                            {forecast.map(item => (
                                <li key={item.time}>
                                    {isTeReo ? 'Uanga: ' : 'Rainfall: '} <b>{item.data.next_1_hours.details.precipitation_amount}</b> mm  <small>(in the next hour)</small>
                                </li> 
                            ))}
                           
                        </div>
                        <div className='wind-speed'>
                            {forecast.map(item => (
                                <li key={item.time}>
                                    Wind speed: {Math.round(item.data.instant.details.wind_speed * 3.6)} km/h {windDirection()}
                                </li>
                            ))}
                        </div>
                        <div className='rh'>
                            {forecast.map(item => (
                                <li key={item.time}>
                                    {isTeReo ? 'Pīpīwai: '  : 'Humidity: ' }  {item.data.instant.details.relative_humidity} %
                                </li>
                            ))}
                        </div>
                        <div className='sunrise-sunset'>
                            <li>
                                {isTeReo ? 'whitinga o te rā: ' : 'sunrise: '} {sunriseApiFallback()}
                            </li>
                            <li>
                            {isTeReo ? 'tōnga o te rā: ' : 'sunset: '} {sunsetApiFallback()}
                            </li>
                        </div>
                        <div className='day-length'>
                         <p>Day length: {dayLengthFallback()}</p>
                        </div>
                    </ul>
                </div>
                <div className='return'>
                    <small>
                        <Link style={customStyles.backLinkStyle} to='/'>Back</Link>
                    </small>
                </div>
                <div>
                <button 
                        className="btn waves-effect waves-light dev-btn" 
                        style={customStyles.devButton} onClick={() => isDevMode ? setIsDevMode(false) : setIsDevMode(true) }
                    >Dev mode
                    </button>
                </div>
        </div>
    </div>
  )
}
