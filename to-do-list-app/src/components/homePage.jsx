import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid, IconButton , List, ListItem, ListItemText, ListItemIcon, Skeleton, Stack  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import CircularProgress from '@mui/material/CircularProgress';

const HomePage = () => {
    const [textValue, setTextValue] = useState('');
    const [toDoItemsList, setToDoItemsList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch('https://dummyjson.com/todos?limit=5')
            .then(res => res.json())
            .then(setToDoItemsList);
    }, []);

    const addToDoItem = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/todos/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    todo: textValue,
                    completed: false,
                    userId: 5,
                })
            });
            if (!response.ok) {
                throw new Error('Failed to post data');
            }
            setLoading(false);
            setTextValue('');
            const result = await response.json();
            setToDoItemsList([...toDoItemsList, result]);
        } catch (error) {
            console.log(error); 
        }
    };

    const deleteToDoItem = async (id) => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/todos/'+id, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Failed to post data');
            }

            setLoading(false);
            const result = await response.json();
            setToDoItemsList(toDoItemsList.filter(todo => todo.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <Box sx={{ width: '100%'}} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid size={4} >
                    <TextField id="todoItem" sx={{ width: '100%'}} label="Type To do Item" variant="outlined" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                </Grid>
                <Grid size={1} >
                    <Button variant="contained" sx={{ height: '100%'}} size="large" onClick={addToDoItem}>Add</Button>
                </Grid>
                <Grid size={1}>
                    { loading && <CircularProgress aria-label="Loading…" />}
                </Grid>
            </Grid>
            <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
                {toDoItemsList?.todos?.map((value) => (
                    <ListItem
                        key={value.id}
                        disableGutters
                        secondaryAction={
                            <>
                            <IconButton aria-label="comment" onClick={() => deleteToDoItem(value.id)}>
                                <DeleteIcon />
                            </IconButton>
                            </>
                        }
                    >
                    <ListItemText primary={value.todo} />
                    </ListItem>
                ))}
            </List>
        </Box>
        </>
    );
};
export default HomePage;