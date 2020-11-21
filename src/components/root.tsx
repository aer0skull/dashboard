import { AppBar } from "./AppBar"
import React from "react"
import { makeStyles, useTheme } from "@material-ui/core"
import { FlexLayout, join } from "../utils"
import { CardList } from "./CardList";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        backgroundColor: theme.palette.background.default
    }
}));

export function Root() {

    const theme = useTheme()
    const classes = useStyles(theme)
    const flex = FlexLayout()

    return (
        <div className={join(classes.root, flex.vertical)}>
            <AppBar />
            <CardList />
        </div>
    )
}