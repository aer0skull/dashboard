import React from "react"
import { AppBar as MuiAppBar, Button } from "@material-ui/core"
import { IconButton, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from '@material-ui/core/Typography';

export interface AppBarProps {
}

export function AppBar(props: AppBarProps) {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Dashboard
                </Typography>
            </Toolbar>
        </MuiAppBar>
    )
}