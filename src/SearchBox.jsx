// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";
// import { useState } from 'react';


// export default function SearchBox({updateInfo}) {
//     let [city,setCity] = useState("");
//     let [error,setError] = useState(false);

//     let API_URL="https://api.openweathermap.org/data/2.5/weather"
//     let API_KEY="6888a67fc85bb9a0ac1c0146a33b7ff8";

//     let getWeatherInfo = async () =>{
//       try{
//        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//        let jsonResponse = await response.json();
//        console.log(jsonResponse);

//        let result = {
//         city: city,  
//         temp:jsonResponse.main.temp,
//         tempMin:jsonResponse.main.temp_min,
//         tempMax:jsonResponse.main.temp_max,
//         humidity:jsonResponse.main.humidity,
//         feelslike:jsonResponse.main.feels_like,
//         weather:jsonResponse.weather[0].description,
//        };
//        console.log(result);
//        return result;
//       }catch(err){
//         throw err;
//       }
       

//     };
    

//     let handleChange = (evt) => {
//         setCity(evt.target.value);
//     }; 

//     let handleSubmit = async (evt)=>{
//       try{
//         evt.preventDefault();
//         console.log(city);
//         setCity("");
//         let newInfo= await getWeatherInfo();
//         updateInfo(newInfo);
//       }catch (err){
//         setError(true)
//       }
//     };
        
//   return (
//     <div className="SearchBox">
//       <form onSubmit={handleSubmit}>
//         <TextField id="city" label="city Name" variant="outlined" required 
//         value ={city}
//         onChange={handleChange} 
//         />
//         <Button variant="contained" type="submit">
//         Search
//       </Button> 
//       {error && <p> No such place exist in our API</p>}
//       </form>
//     </div>
//   );
// }





// --------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";

// export default function SearchBox({ updateInfo }) {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");

//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "6888a67fc85bb9a0ac1c0146a33b7ff8";

//   const getWeatherInfo = async () => {
//     try {
//       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       let jsonResponse = await response.json();
      
//       if (jsonResponse.cod !== 200) {
//         throw new Error(jsonResponse.message);
//       }

//       let result = {
//         city: city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelslike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };
//       return result;
//     } catch (err) {
//       throw err;
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//     setError(""); // Clear error when user starts typing
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       let newInfo = await getWeatherInfo();
//       updateInfo(newInfo);
//       setCity("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="SearchBox">
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/system';
import './SearchBox.css';

// Define styled components
const DialogPaper = styled('div')({
  borderRadius: 8,
  backgroundColor: '#f2f2f2', // Light grey background for the dialog
});

const DialogTitleStyled = styled(DialogTitle)({
  backgroundColor: '#3f51b5', // Dark blue for the title background
  color: '#fff', // White text color for the title
});

const DialogContentStyled = styled(DialogContent)({
  padding: '20px 24px', // Add padding to content
});

const DialogActionsStyled = styled(DialogActions)({
  backgroundColor: '#f2f2f2', // Light grey background for actions
});

const CloseButton = styled(Button)({
  color: '#3f51b5', // Match button color with title background
});

const ErrorText = styled(DialogContentText)({
  color: '#d32f2f', // Red color for error text
  fontWeight: 'bold',
});

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6888a67fc85bb9a0ac1c0146a33b7ff8";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClose = () => {
    setError("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      <Dialog
        open={Boolean(error)}
        onClose={handleClose}
        PaperProps={{ component: DialogPaper }}
        TransitionProps={{
          onEntered: () => document.body.style.overflow = 'hidden', // Prevent body scroll
          onExited: () => document.body.style.overflow = 'auto' // Restore body scroll
        }}
      >
        <DialogTitleStyled>Error</DialogTitleStyled>
        <DialogContentStyled>
          <ErrorText>
            {error}
          </ErrorText>
        </DialogContentStyled>
        <DialogActionsStyled>
          <CloseButton onClick={handleClose}>
            Close
          </CloseButton>
        </DialogActionsStyled>
      </Dialog>
    </div>
  );
}
