import { Card, CardHeader, CardMedia, CardContent, Grid, Typography } from '@mui/material';
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const WeatherCard = ({weatherData}) => {
    const weather = weatherData?.weather !== undefined ? weatherData.weather[0]: [];
    console.log(weatherData);
    
    const date = new Date();
    const today = days[date.getDay()] + ", " + date.toLocaleString();
    return(
        <Card sx={{width:"80%"}}>
            <CardHeader
                title={weatherData?.name}
                subheader={today}
            ></CardHeader>
            <CardMedia
                component="img"
                height="250"
                width="200"
                image="src/assets/cloudy.jpg"
                alt={weather.main}
            ></CardMedia>
            <CardContent>
                <Grid>
                    <Grid>
                        <Typography gutterBottom variant="h5" component="div">
                            Visibility: {weatherData?.visibility}
                        </Typography>   
                    </Grid>
                    <Grid ColumnSpacing={{sm:2}}>
                        <Grid>
                            <Typography gutterBottom variant="h5" component="div">
                                Min Temperature: {weatherData?.main?.temp_min}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography gutterBottom variant="h5" component="div">
                                Max Temperature: {weatherData?.main?.temp_max}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default WeatherCard ;