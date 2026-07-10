import { Box, Grid, Typography, CircularProgress  } from "@mui/material";

import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";
function App() {
    const { data, loading, error, fetchWeather } = useWeather();
    console.log(data);
    
    return (
        <Box sx={{width: "100%"}}>
            <Grid container rowSpacing={1} >
                <Grid size={12} className="align-content-center"> <h1>Weather App</h1> </Grid>
                {/* search bar */}
                <Grid size={12} className="align-content-center">
                    <SearchBox onHandleClick={fetchWeather}/>
                </Grid>
                {/* Loading */}
                <Grid size={12} className="align-content-center">
                    {loading && <CircularProgress  />}
                </Grid>
                {/* Error message */}
                <Grid size={12} className="align-content-center">
                    {
                        error && !loading && !data &&
                        <Typography>
                            {error}
                        </Typography>
                    }
                </Grid>
                {/* weather card */}
                <Grid size={12} className="align-content-center">
                    {data !== null && <WeatherCard weatherData={data} />}
                    {!data && !loading && !error && <p>Search for a city to get started.</p>}
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;