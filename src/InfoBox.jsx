import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import "./InfoBox.css"

export default function InfoBox({ info }) {

  const HOT_URL= "https://images.unsplash.com/photo-1462524500090-89443873e2b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL= "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxyYWlufGVufDB8fDB8fHww";
  const COLD_URL= "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNub3d8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      {/* <h2>WeatherInfo - {info.weather}</h2> */}
      <Card sx={{ width: 350 }}>
        <CardMedia
          sx={{ height: 200 }}
          image= {
            info.temp < 10 ? COLD_URL : info.humidity > 83 ? RAIN_URL : HOT_URL
          }
          title={info.city}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b>{info.city} ({info.country})</b>
          </Typography>
          <Typography variant="body2" color="text.secondary"component="div">
            <div><b>Weather :</b> <i>{info.weather}</i></div>
            <div><b>Max.Temperature :</b> <i>{info.tempMax}&deg;C</i></div>
            <div><b>Min.Temperature :</b> <i>{info.tempMin}&deg;C</i></div>
            <div><b>Temperature :</b> <i>{info.temp}&deg;C</i></div>
            <div><b>Humidity :</b> <i>{info.humidity}%</i></div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
