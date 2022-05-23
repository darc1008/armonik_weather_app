const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'f6aef9957fmsh915b963a91ecae1p12b2f5jsne0e2bae82d98'
    }
};
export async function getWeatherFrom(query="Santo Domingo"){
  

const response= await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=santo%20domingo', options)
    const data=await response.json()
    const {location,current}=data;
    const {country,localtime,name}=location;
    const {condition,
        humidity,
        feels_like_c,
        temp_c,
        is_day,
        wind_kph,
        wind_dir}=current
    const {text,icon,code}=condition
    return {
        conditionCode:code,
        conditionText:text,
        country,
        icon,
        name,
        humidity,
        localtime,
        isDay:is_day,
        feelsLike:feels_like_c,
        temperature:temp_c,
        windSpeed:wind_kph,
        windDir:wind_dir
    }

}      