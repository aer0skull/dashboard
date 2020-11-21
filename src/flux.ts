import React from "react"

const fluxState: any = {}

export function useFlux<T>(name: string, defaultValue?: T): [T | undefined, (v: T) => void] {

    const def = fluxState[name] === undefined ? defaultValue : fluxState[name]
    const [value, setValue] = React.useState<T | undefined>(def)

    function setter(newValue: T) {
        fluxState[name] = newValue
        document.dispatchEvent(new CustomEvent("fluxUpdated"))
    }

    React.useEffect(() => {
        const cb = () => {
            if (fluxState[name])
                setValue(fluxState[name])
        }
        document.addEventListener("fluxUpdated", cb)
        
        return () => {
            document.removeEventListener("fluxUpdated", cb)
        }
    }, [])

    return [value, setter]
}