import { Button, Container } from '@mui/material'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { LinkLayout } from './Link'
import { LinkProvider } from './useLinks'

const queryClient = new QueryClient()

function App() {
    const [isAdmin, setIsAdmin] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <QueryClientProvider client={queryClient}>
            <Container sx={{ marginTop: '6vh' }}>
                <Button onClick={() => setIsAdmin(!isAdmin)} />
                <LinkProvider>
                    <LinkLayout />
                </LinkProvider>
            </Container>
        </QueryClientProvider>
    )
}

// eslint-disable-next-line import/no-default-export
export default App
