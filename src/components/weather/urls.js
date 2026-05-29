
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
// Next idea, create a barrometer object (maybe check d3.js) later step would be to log the pressure to show the pressure trend over the last 12 hours and next 12 hours

export const urlInput = (lat, long, altitude, timezone, date) => {
    const weatherApiUrl = `https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=${altitude}&lat=${lat}&lon=${long}`;
    const sunriseSunsetApiUrl = `http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=${date}&formatted=0`;
    const sunriseSunsetApiUrlformatted = `http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=${date}`;
    const sunriseSunsetIoUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&timezone=${timezone}&date=${date}`;
    
    return {
        weatherApiUrl,
        sunriseSunsetApiUrl,
        sunriseSunsetApiUrlformatted,
        sunriseSunsetIoUrl
    };
}

export const data = [
    {
        name: 'Christchurch',
        lat: -43.532055,
        long: 172.636230,
        altitude: 40,
        timezone: 'Pacific/Auckland',
        date: 'today'},
     {
        name: 'Adelaide',
        lat: -34.9285,
        long: 138.6007,
        altitude: 50,
        timezone: 'Australia/Adelaide',
        date: 'today'},
    {
        name: 'Melbourne',
        lat: -37.8136,
        long: 144.9631,
        altitude: 31,
        timezone: 'Australia/Melbourne',
        date: 'today'},
    {
        name: 'Sydney',
        lat: -33.8688,
        long: 151.2093,
        altitude: 30,
        timezone: 'Australia/Sydney',
        date: 'today'},
    {
        name: 'Brisbane',
        lat: -27.4698,
        long: 153.0251,
        altitude: 30,
        timezone: 'Australia/Brisbane',
        date: 'today'},
   {
        name: 'Auckland',
        lat: -36.8485,
        long: 174.7633,
        altitude: 30,
        timezone: 'Pacific/Auckland',
        date: 'today'},
    {
        name: 'Hobart',
        lat: -42.8821,
        long: 147.3272,
        altitude: 50,
        timezone: 'Australia/Hobart',
        date: 'today'},
    {
        name: 'Perth',
        lat: -31.9505,
        long: 115.8605,
        altitude: 30,
        timezone: 'Australia/Perth',
        date: 'today'},
    {
        name: 'Victor Harbor',
        lat: -35.5542,
        long: 138.6178,
        altitude: 30,
        timezone: 'Australia/Adelaide',
        date: 'today'},

    {
        name: 'Newcastle',
        lat: -32.9283,
        long: 151.7817,
        altitude: 30,
        timezone: 'Australia/Sydney',
        date: 'today'
    },
    {
        name: 'Wollongong',
        lat: -34.4278,
        long: 150.8931,
        altitude: 30,
        timezone: 'Australia/Sydney',
        date: 'today'
    },
    {
        name: 'Gold Coast',
        lat: -28.0167,
        long: 153.4000,
        altitude: 30,
        timezone: 'Australia/Brisbane',
        date: 'today'
    },
    {
        name: 'Canberra',
        lat: -35.2809,
        long: 149.1300,
        altitude: 578,
        timezone: 'Australia/Canberra',
        date: 'today'
    },
    {
        name: 'Darwin',
        lat: -12.4634,
        long: 130.8456,
        altitude: 50,
        timezone: 'Australia/Darwin',
        date: 'today'
    },
    {
        name: 'Alice Springs',
        lat: -23.6980,
        long: 133.8807,
        altitude: 500,
        timezone: 'Australia/North',
        date: 'today'
    },
    {
        name: 'Cairns',
        lat: -16.9186,
        long: 145.7781,
        altitude: 7,
        timezone: 'Australia/Queensland',
        date: 'today'
    },
    {
        name: 'Broome',
        lat: -17.9614,
        long: 122.2359,
        altitude: 50,
        timezone: 'Australia/Perth',
        date: 'today'
    },
    {
        name: 'Townsville',
        lat: -19.2589,
        long: 146.8169,
        altitude: 15,
        timezone: 'Australia/Queensland',
        date: 'today'
    },
    {
        name: 'Mount Gambier',
        lat: -37.8310,
        long: 140.7820,
        altitude: 50,
        timezone: 'Australia/Adelaide',
        date: 'today'
    },
    {
        name: 'Launceston',
        lat: -41.4545,
        long: 147.1369,
        altitude: 50,
        timezone: 'Australia/Tasmania',
        date: 'today'
    },
    {
        name: 'Mildura',
        lat: -34.2088,
        long: 142.1210,
        altitude: 50,
        timezone: 'Australia/Victoria',
        date: 'today'
    },
    {
        name: 'Black Heath',
        lat: -33.7123,
        long: 150.3119,
        altitude: 1065,
        timezone: 'Australia/Sydney',
        date: 'today'
    },
    {
        name: 'Broken Hill',
        lat: -31.9535,
        long: 141.4531,
        altitude: 330,
        timezone: 'Australia/Adelaide',
        date: 'today'
    },
    {
        name: 'Jamestown',
        lat: -33.2039,
        long: 138.6007,
        altitude: 50,
        timezone: 'Australia/Adelaide',
        date: 'today'
    },
    {
        name: 'Clare',
        lat: -33.8350,
        long: 138.6167,
        altitude: 50,
        timezone: 'Australia/Adelaide',
        date: 'today'
    },
    {
        name: 'Port Augusta',
        lat: -32.4958,
        long: 137.7652,
        altitude: 50,
        timezone: 'Australia/Adelaide',
        date: 'today'
    },
    {
        name: 'Coober Pedy',
        lat: -29.0134,
        long: 134.7544,
        altitude: 200,
        timezone: 'Australia/Adelaide',
        date: 'today'
    },
    {
        name: 'Wellington',
        lat: -41.2865,
        long: 174.7762,
        altitude: 50,
        timezone: 'Pacific/Auckland',
        date: 'today'},
   {
        name: 'Dunedin',
        lat: -45.8788,
        long: 170.5028,
        altitude: 15,
        timezone: 'Pacific/Auckland',
        date: 'today'},
    {
        name: 'Arthur\'s Pass',
        lat: -42.9581,
        long: 171.5516,
        altitude: 800,
        timezone: 'Pacific/Auckland',
        date: 'today'
    },
    {
        name: 'Queenstown',
        lat: -45.0312,
        long: 168.6626,
        altitude: 300,
        timezone: 'Pacific/Auckland',
        date: 'today'
    },
    {
        name: 'Nelson',
        lat: -41.2706,
        long: 173.2840,
        altitude: 50,
        timezone: 'Pacific/Auckland',
        date: 'today'
    },
   {
        name: 'Beijing',
        lat: 39.9042,
        long: 116.4074,
        altitude: 50,
        timezone: 'Asia/Shanghai',
        date: 'today'}, 
     {
        name: 'Tokyo',
        lat: 35.6895,
        long: 139.6917,
        altitude: 50,
        timezone: 'Asia/Tokyo',
        date: 'today'},
    {
        name: 'London',
        lat: 51.5074,
        long: -0.1278,
        altitude: 50,
        timezone: 'Europe/London',
        date: 'today'},
     {
        name: 'New York',
        lat: 40.7128,
        long: -74.0060,
        altitude: 10,
        timezone: 'America/New_York',
        date: 'today'},
     {
        name: 'Savannah',
        lat: 32.0809,
        long: -81.0912,
        altitude: 30,
        timezone: 'America/New_York',
        date: 'today'},
    {
        name: 'Los Angeles',
        lat: 34.0522,
        long: -118.2437,
        altitude: 30,
        timezone: 'America/Los_Angeles',
        date: 'today'},
   {
        name: 'Sedona',
        lat: 34.8697,
        long: -111.7609,
        altitude: 1300,
        timezone: 'America/Phoenix',
        date: 'today'},
     {
        name: 'Paris',
        lat: 48.8566,
        long: 2.3522,
        altitude: 35,
        timezone: 'Europe/Paris',
        date: 'today'},
     {
        name: 'Rome',
        lat: 41.9028,
        long: 12.4964,
        altitude: 50,
        timezone: 'Europe/Rome',
        date: 'today'},
    {
        name: 'Lauterbrunnen',
        lat: 46.5931,
        long: 7.9090,
        altitude: 800,
        timezone: 'Europe/Zurich',
        date: 'today'},

    {
        name: 'Zurich',
        lat: 47.3769,
        long: 8.5417,
        altitude: 400,
        timezone: 'Europe/Zurich',
        date: 'today'}, 
    {
        name: 'Lisbon',
        lat: 38.7223,
        long: -9.1393,
        altitude: 10,
        timezone: 'Europe/Lisbon',
        date: 'today'},
        
    {
        name: 'Geneva',
        lat: 46.2044,
        long: 6.1432,
        altitude: 400,
        timezone: 'Europe/Zurich',
        date: 'today'
    },
    {
        name: 'San Diego',
        lat: 32.7157,
        long: -117.1611,
        altitude: 30,
        timezone: 'America/Los_Angeles',
        date: 'today'
    },
    {
        name: 'Miami',
        lat: 25.7617,
        long: -80.1918,
        altitude: 30,
        timezone: 'America/New_York',
        date: 'today'
    },
    {
        name: 'Mexico City',
        lat: 19.4326,
        long: -99.1332,
        altitude: 2250,
        timezone: 'America/Mexico_City',
        date: 'today'
    },
    {
        name: 'Vancouver',
        lat: 49.2827,
        long: -123.1207,
        altitude: 30,
        timezone: 'America/Vancouver',
        date: 'today'
    },
    {
        name: 'Santiago',
        lat: -33.4489,
        long: -70.6693, 
        altitude: 500,
        timezone: 'America/Santiago',
        date: 'today'
    },
    {
        name: 'Buenos Aires',
        lat: -34.6037,
        long: -58.3816,
        altitude: 25,
        timezone: 'America/Argentina/Buenos_Aires',
        date: 'today'
    },
    {
        name: 'Rio de Janeiro',
        lat: -22.9068,
        long: -43.1729,
        altitude: 30,
        timezone: 'America/Sao_Paulo',
        date: 'today'
    },
    {
        name: 'Lima',
        lat: -12.0464,
        long: -77.0428,
        altitude: 154,
        timezone: 'America/Lima',
        date: 'today'
    },
    {
        name: 'Bogota',
        lat: 4.7110,
        long: -74.0721,
        altitude: 2640,
        timezone: 'America/Bogota',
        date: 'today'
    },
    {
        name: 'Atlanta',
        lat: 33.7490,
        long: -84.3880,
        altitude: 300,
        timezone: 'America/New_York',
        date: 'today'
    },
    {
        name: 'New Orleans',
        lat: 29.9511,
        long: -90.0715,
        altitude: 2,
        timezone: 'America/Chicago',
        date: 'today'
    },
    {
        name: 'Boston',
        lat: 42.3601,
        long: -71.0589,
        altitude: 30,
        timezone: 'America/New_York',
        date: 'today'
    },
    ]