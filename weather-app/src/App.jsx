import SearchBox from "./components/SearchBox";
import useWeather from "./hooks/useWeather";
function App() {
    const { data, fetchWeather } = useWeather();
    console.log(data);
    
    return (
        <div className ="app">
            <h1>Weather App</h1>
            {/* search bar */}
            <SearchBox onHandleClick={fetchWeather}/>
            {/* weather card */}
        </div>
    );
}

export default App;