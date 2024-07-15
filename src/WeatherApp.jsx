import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Wuxia",
        country : "LN",
        humidity: 83,
        temp: 22.49,
        tempMax: 23.8,
        tempMin: 21.18,
        weather: "Windy",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div className="WeatherBox" style={{textAlign:"center"}}>
            <h2>WeatherBoost</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}