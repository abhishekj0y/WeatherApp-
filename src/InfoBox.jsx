import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';


export default function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info = {
    //     city: "Delhi",
    //     feelslike:38.05,
    //     temp:31.05,
    //     tempMax:31.05, // cuz this is shifted to weather app.jsx
    //     tempMin:31.05, ** these are the default values that we have set just for reference **
    //     weather:"mist",
    //     humidity:89,

    // }
    const HOT_URL ="https://img.freepik.com/free-vector/gradient-summer-heat-background_23-2149423259.jpg?t=st=1721412876~exp=1721416476~hmac=5a9d078d72e7858631e39154570939ba284eb334f0b19d1a7c3983fb0aad9bf5&w=996"
    const COLD_URL ="https://img.freepik.com/free-photo/dolomites-mountains-with-snow_181624-8296.jpg?t=st=1721413423~exp=1721417023~hmac=e8ba5d9c49eb2186f7de41175409e9d0fb35c17216821bef24c1b07f152da662&w=996"
    const RAIN_URL="https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478106.jpg?t=st=1721413269~exp=1721416869~hmac=3f9bd209faf282bc2fbd761c9575b0e498eb8f90d8a4d9b462b0fdfcedbcf568&w=1060"

  
    return (
    <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL : info.temp>15?HOT_URL:COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component ={"span"}>
         <p> Temperature = {info.temp}&deg;c</p>
         <p> Humidity = {info.humidity}</p>
         <p> Minimum Temperature  = {info.tempMin}&deg;c</p>
         <p> Miximum Temperature = {info.tempMax}&deg;c</p>
         <p> The weather can be described as <i>{info.weather}</i> feels like {info.feelslike}&deg;c</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  );
}
