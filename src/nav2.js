import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

function LinkBar(props) {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        textAlign: 'center'
    };

    return (
        <List style={flexContainer}>
            <ListItem>
                <Button href="https://www.linkedin.com/in/srajan17" target="_blank" variant="contained" color="primary">LinkedIn</Button>
            </ListItem>
            <ListItem>
                <Button variant="contained" color="primary">Email</Button>
            </ListItem>
            <ListItem>
                <Button href="https://github.com/srajan-17" target="_blank" variant="contained" color="primary">GitHub</Button>
            </ListItem>
        </List>
    )
}

export default LinkBar;