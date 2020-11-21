import { makeStyles } from "@material-ui/core";

export const FlexLayout = makeStyles({
    horizontal: {
        display: "flex",
        flexDirection: "row"
    },
    vertical: {
        display: "flex",
        flexDirection: "column"
    }
})

export function join(...classes : string[]) {
    return classes.join(' ')
}