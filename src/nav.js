import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

function NavBar(props) {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        textAlign: 'center'
    };

    return (
        <List style={flexContainer}>
            <ListItem component="div">
                <Button variant="contained" onClick={props.clickAbout}>About</Button>
            </ListItem >
            <ListItem component="div">
                <Button variant="contained" onClick={props.clickProjects}>Projects</Button>
            </ListItem >
            <ListItem component="div">
                <Button variant="contained" onClick={props.clickResume}>Resume</Button>
            </ListItem >
            <ListItem component="div">
                <Button variant="contained" onClick={props.clickContact}>Contact</Button>
            </ListItem >
        </List>
    )
}

export default NavBar;