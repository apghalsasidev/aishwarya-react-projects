import { useState } from 'react';
import { Grid, IconButton, TextField, Box  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/components.css';
const SearchBox = ({onHandleClick}) => {
    const [city, setCity] = useState('');
    const handleSearchClick = () => {
        e.preventDefault();
        if (!city.trim()) return;
        onHandleClick(city);
    }
    return (
        <Box sx={{ width:"100%" }}>
            <Grid container className="search-box-container" rowSpacing={1} columnSpacing={{ xs:1, sm: 2, md:3 }}>
                <Grid size={4}>
                   <TextField id="standard-basic" sx={{width: "100%"}} label="city" variant="standard" value={city} onChange={(e) => setCity(e.target.value)} />
                </Grid>
                <Grid size={1}>
                    <IconButton size="large" sx={{ height: '100%'}} onClick={handleSearchClick}>
                        <SearchIcon />
                    </IconButton>
                </Grid> 
            </Grid>
        </Box>
    )
}
export default SearchBox;