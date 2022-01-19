import { Button, Container } from '@mui/material'
import { useState } from 'react'
import './App.css'
import { LinkLayout } from './Link'
import { LinkProvider } from './useLinks'

function App() {
    const [isAdmin, setIsAdmin] = useState(false)
    return (
        <Container sx={{ marginTop: '6vh' }}>
            <Button onClick={() => setIsAdmin(!isAdmin)} />
            <LinkProvider>
                <LinkLayout />
            </LinkProvider>
        </Container>
    )
}

// eslint-disable-next-line import/no-default-export
export default App
