import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Become a Member</MenuItem>
                <MenuItem onClick={handleClose}>Sign In</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Zoos and Conservation</MenuItem>
                <MenuItem onClick={handleClose}>Our Animals</MenuItem>
                <MenuItem onClick={handleClose}>Animals News</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
            </Menu>
        </div>
    );
}
