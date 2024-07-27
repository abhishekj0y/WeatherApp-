import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelslike:38.05,
        temp:31.05,
        tempMax:31.05,
        tempMin:31.05,
        weather:"mist",
        humidity:89,
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(<div style={{textAlign:"center"}}>
        <h2 style={{color: "black"}}>Weather App </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
        </div>)
}