import { Edit, Save } from '@mui/icons-material'
import { TextField, Typography } from '@mui/material'
import { useMachine } from '@xstate/react'
import { useCallback } from 'react'
import { createMachine } from 'xstate'

function machineWithValue(initialState: string) {
    return createMachine({
        id: 'toggle',
        initial: initialState,
        states: {
            inactive: {
                on: { TOGGLE: 'active' },
            },
            active: {
                on: { TOGGLE: 'inactive' },
            },
        },
    })
}

type LinkEditProps = {
    id: string
    label: string
    value: string
    variant?: 'h6' | 'subtitle1'
    handleEditValue: (e: string, id: string) => void
}

export function LinkEdit({
    id,
    label,
    value,
    variant,
    handleEditValue,
}: LinkEditProps) {
    const [state, send] = useMachine(
        machineWithValue(value ? 'inactive' : 'active')
    )

    const sendToggle = useCallback(() => {
        send('TOGGLE')
    }, [send])

    const on = (
        <>
            <TextField
                id="standard-basic"
                label={label}
                variant="standard"
                onBlur={sendToggle}
                onChange={(e) => handleEditValue(e.target.value, id)}
            />
            <Save onClick={sendToggle} />
        </>
    )

    const off = (
        <>
            <Typography
                variant={variant ?? 'body1'}
                sx={{ margin: '1vh', paddingBottom: value ? 0 : 4 }}
            >
                {value}
            </Typography>
            <Edit onClick={sendToggle} />
        </>
    )

    return <>{state.value === 'active' ? on : off}</>
}
