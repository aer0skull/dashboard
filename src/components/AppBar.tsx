import React from "react"
import { AppBar as MuiAppBar, makeStyles } from "@material-ui/core"
import { IconButton, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from '@material-ui/core/Typography';
import { FlexLayout, getLocalStorageTheme, join } from "../utils";
import { useFlux } from "../flux";
import { Brightness4, BrightnessHigh } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    toolbar: {
        justifyContent: "space-between"
    },
    align: {
        alignItems: "center"
    }
}))

export interface AppBarProps {
}

export function AppBar(props: AppBarProps) {

    const flex = FlexLayout()
    const classes = useStyles()

    const [themeType, setThemeType] = useFlux<string>("themeType", getLocalStorageTheme())

    function toggleTheme() {
        if (themeType === "light") {
            console.log("onclick ?", themeType)
            setThemeType("dark")
        } else {
            setThemeType("light")
        }
    }

    return (
        <MuiAppBar position="static">
            <Toolbar className={join(classes.toolbar, flex.horizontal)}>
                <div className={join(classes.align, flex.horizontal)}>
                    <IconButton color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Dashboard
                    </Typography>
                </div>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleTheme}
                    >
                        {themeType === "light" ? <Brightness4 /> : <BrightnessHigh />}
                    </IconButton>
                </div>
            </Toolbar>
        </MuiAppBar>
    )
}