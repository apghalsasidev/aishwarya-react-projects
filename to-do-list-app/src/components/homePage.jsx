import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid, IconButton , List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const HomePage = () => {
    const [textValue, setTextValue] = useState('');
    const [toDoItemsList, setToDOItemsList] = useState([]);
    
    const addToDoItem = () => {
        setToDOItemsList(...toDoItemsList, textValue);
    };

    return(
        <>
        <Box sx={{ width: '100%'}} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid size={4} >
                    <TextField id="todoItem" sx={{ width: '100%'}} label="Type To do Item" variant="outlined" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                </Grid>
                <Grid size={2} >
                    <Button variant="contained" sx={{ height: '100%'}} size="large" onClick={addToDoItem}>Add</Button>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <ListItem alignItems="flex-start"
                    key={'L1'}
                    disableGutters
                    secondaryAction= {
                        <IconButton aria-label="comment">
                        <DeleteIcon />
                        </IconButton>
                    }>
                    <ListItemText
                        primary ="L1"
                    />
             </ListItem>
            </Grid>
           
        </Box>
        </>
    );
};
export default HomePage;