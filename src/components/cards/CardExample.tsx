import { Button, ButtonGroup, Paper } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import React from "react"

const rootStyle = undefined

export interface CardExampleProps {
    value: string;
}

export function CardExample(props: CardExampleProps) {

    // like variables but for components, it's the way to store things
    // couple of [readOnly, setter]
    // https://fr.reactjs.org/docs/hooks-state.html
    const [count, setCount] = React.useState(0) //default value is 0

    return (
        <Paper className={rootStyle}>
            <div>
                <Typography>this is my card, here the value props : {props.value}</Typography>
            </div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button
                    onClick={() => {
                        setCount(count - 1)
                    }}
                >Decrement</Button>
                <Button
                    onClick={() => {
                        setCount(0)
                    }}
                >Reset</Button>
                <Button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >Increment</Button>
            </ButtonGroup>

            <Typography variant="h1">{count}</Typography>
        </Paper>
    )
}