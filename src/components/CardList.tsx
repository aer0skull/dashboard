import { makeStyles } from "@material-ui/core";
import React from "react"
import { CardExample } from "./cards/CardExample"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        "& > *": {
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        }
    }
}));

export interface CardListProps {

}

export function CardList(props: CardListProps) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CardExample value="my value" />
        </div>
    )
}