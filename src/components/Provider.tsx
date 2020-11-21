import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import React from "react"
import { useFlux } from "../flux"
import { getLocalStorageTheme, setLocalStorageTheme, ThemeType, themeTypeLabel } from "../utils"
import { Root } from "./Root"

export function Provider() {

    const [themeType] = useFlux<ThemeType>(themeTypeLabel, getLocalStorageTheme())

    const theme = createMuiTheme({ palette: { type: themeType } })

    React.useEffect(() => {
        if (themeType) {
            setLocalStorageTheme(themeType)
        }
    }, [themeType])


    return (
        <ThemeProvider theme={theme} >
            <Root />
        </ThemeProvider>
    )
}