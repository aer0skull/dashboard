import { makeStyles } from "@material-ui/core";

export const themeTypeLabel = "themeType"

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

export function nullAsUndef<T>(value : T | null) {
    return value ? value : undefined
}

export function getLocalStorageTheme() : ThemeType | undefined {
    let value = localStorage.getItem(themeTypeLabel)
    if (value == "light" || value == "dark") {
        return value
    } else {
        return undefined
    }
}

export function setLocalStorageTheme(value : ThemeType) {
    localStorage.setItem(themeTypeLabel, value)
}

export const themeTypeValues = ["light", "dark"] as const
export type ThemeType = typeof themeTypeValues[number]