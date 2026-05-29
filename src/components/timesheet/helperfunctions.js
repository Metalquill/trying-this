import MySVGIcons from '../weather/MySVGIcons'

// initiating dates
const currentDate = new Date()
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

const days = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export let whatsToday = days[currentDate.getDay()]
export let whatsTomorrow = days[tomorrow.getDay()]
export let whatsDayAfterTomorrow = days[dayAfterTomorrow.getDay()]

// Forecasting Icon and Description
export const weatherIconOutput = (forecast) => {
    const currentWeatherIcon = forecast.map((b) => b.data.next_1_hours.summary.symbol_code)
    console.log("current weather icon: ", currentWeatherIcon, typeof currentWeatherIcon)
    return MySVGIcons[currentWeatherIcon]
}

export const weatherIcontest = (dataInput) => {
    const stripTime = [dataInput.replace(/\s+\d+:\d+/, '')]
    console.log("strip time: ", stripTime, typeof stripTime)
    // if (MySVGIcons[stripTime] === 'no_icon') {
    //     return 
    // }

    console.log("icon test: ", MySVGIcons[stripTime])
    return MySVGIcons[stripTime]
}

export const weatherDesciption = (forecast) => {
    const weatherSymbolName = forecast.map((item) => item.data.next_1_hours.summary.symbol_code.replace('_', ' '))
    if (weatherSymbolName.indexOf('_') > -1 ) {
        return weatherSymbolName.replace('_', ' ')
    } else {
        return weatherSymbolName
    }
} 

export const temperatureToday = (twentyfourHours, timeZone) => {
    // Checks dates to see if they are the same as the current date
    // Pushes those matching dates into an array and then returns the length
    // of that array to be used to slice the response data
    const createDatesFromObjects = []
    const matchingDates = [];
    
    const checkTime = twentyfourHours.map((times) => times.time)
    checkTime.forEach((a) => createDatesFromObjects.push(new Date(a)))
    createDatesFromObjects.forEach(date => {
        if (date.toLocaleDateString("en-US", { timeZone }) === currentDate.toLocaleDateString("en-US", { timeZone })) {
            matchingDates.push(date);
        }
    });
    return matchingDates.length

}

export const temperatureForTomorrow = (fortyEightHours, timeZone) => {
    // Checks dates to see if they are the same as the added date
    // Pushes those matching dates into an array and then returns the length
    // of that array to be used to slice the response data
    const createDatesFromObjects = []
    const matchingDates = [];
    const checkTime = fortyEightHours.map((times) => times.time)
    checkTime.forEach((a) => createDatesFromObjects.push(new Date(a)))
    createDatesFromObjects.forEach(date => {
        if (date.toLocaleDateString("en-US", { timeZone }) === tomorrow.toLocaleDateString("en-US", { timeZone })) {
            matchingDates.push(date);
        }
    });
    return matchingDates.length
  }

export const temperatureByDay = (theData, theDate, minimum, fortyEightHours, seventyTwoHours ) => {
    const theDaysTemp = theData.slice(0, theDate)
    const maxTemp = []
    const minTemp = []
    if(!minimum) {
        theDaysTemp.forEach((items) => {maxTemp.push(parseInt(items.data.instant.details.air_temperature))})
        if (theDate === temperatureForTomorrow(fortyEightHours)) {
            console.log(" tomorrow temps: ", maxTemp)
        } else if (theDate === temperatureForAnyDay(seventyTwoHours)) {
            console.log("DAT temps: ", maxTemp)
        }
        return Math.max(...maxTemp)
    } else {
        theDaysTemp.forEach((items) => {minTemp.push(parseInt(items.data.instant.details.air_temperature))})
        return Math.min(...minTemp)
    }
    
  }
export const temperatureForAnyDay = (seventyTwoHours, timeZone) => {
    // Checks dates to see if they are the same as the added date
    // Pushes those matching dates into an array and then returns the length
    // of that array to be used to slice the response data
    const createDatesFromObjects = []
    const matchingDates = [];
    const checkTime = seventyTwoHours.map((times) => times.time)
    checkTime.forEach((a) => createDatesFromObjects.push(new Date(a)))
    createDatesFromObjects.forEach(date => {
        if (date.toLocaleDateString("en-US", { timeZone }) === dayAfterTomorrow.toLocaleDateString("en-US", { timeZone })) {
            matchingDates.push(date);
        }
    });
    return matchingDates.length
}

// Icons for later
export const iconByHour = (theData, theDate, timeZone) => {
    const getIcons = theData.slice(0, theDate)
    console.log("get icons: ", getIcons)
    const iconDays = []
    let myIcons = []
    getIcons.forEach((datum) => {
        const timeValue = new Date(datum.time)
        const localTime = new Date(timeValue.toLocaleString("en-US", { timeZone }));
        iconDays.push(datum.data.next_1_hours.summary.symbol_code + " " + localTime.getHours() + ":00")
        // if(iconDays.filter(value => value.includes('7:00'))) {
        //     myIcons = iconDays.filter(value => value.includes('7:00'))
        // }
        myIcons = iconDays
        // myIcons.push(iconDays.filter(value => value.includes('7:00')))
    })
    return myIcons
  }
export const iconForTheDay = (theData, time) => {
    const dayIcons = theData.filter(value => value.includes(time))
    if (dayIcons.length < 1) {
        console.log(`${time} icons: `, dayIcons)
        return "no icon"
    }
    return dayIcons[0]
}
    