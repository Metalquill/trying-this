
export const URLs = {
    weatherApiUrl: 'https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=40&lat=-43.532055&lon=172.636230',
    sunriseSunsetApiUrl: 'http://api.sunrise-sunset.org/json?lat=-43.5320&lng=172.6306&date=today&formatted=0',
    lastUpdatedWeatherApiUrl: 'https://api.met.no/weatherapi/locationforecast/2.0/status',
    sunriseSunsetApiUrlformatted: 'http://api.sunrise-sunset.org/json?lat=-43.5320&lng=172.6306&date=today',
    apiHealthUrl: 'https://api.met.no/weatherapi/locationforecast/2.0/healthz',
    sunriseSunsetIoUrl: 'https://api.sunrisesunset.io/json?lat=-43.53202&lng=172.6362&timezone=Pacific/Auckland&date=today',
}

// Create a way to dynamically add the weather forecast and sunrise sunset. 
// Create a lat long table and timezone table for a reasonable amount of cities and towns around the world
// Match cityname and then grab the value pair of that and insert it into the url with a on submit function
// sum all precipitation amounts for the next 1 hours for 1 day, for tomorrow and the day after 
// e.g weatherApiUrl: `https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=${altitude}&lat=${latitude}&lon={longitude}`,
// {}