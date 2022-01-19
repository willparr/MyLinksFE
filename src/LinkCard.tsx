import { Box, Button, Card } from '@mui/material'
import { LinkEdit } from './features/TextInput/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'

export type LinkCardProps = {
    id: string
    linkTitle: string
    link: string
    handleRemove: () => void
    handleEditLink: (e: string, id: string) => void
    handleEditTitle: (e: string, id: string) => void
}

export function LinkCard({
    linkTitle,
    link,
    id,
    handleRemove,
    handleEditLink,
    handleEditTitle,
}: LinkCardProps) {
    return (
        <Card elevation={3} sx={{ display: 'flex', p: 1 }}>
            <Box
                sx={{
                    display: 'flex',
                    flex: '1',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '1 0 auto',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <LinkEdit
                            label="Title"
                            id={id}
                            handleEditValue={handleEditTitle}
                            variant="h6"
                            value={linkTitle}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <LinkEdit
                            label="Link"
                            id={id}
                            handleEditValue={handleEditLink}
                            value={link}
                        />
                    </Box>
                </Box>
                <Button
                    sx={{ display: 'flex' }}
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={handleRemove}
                >
                    Delete
                </Button>
            </Box>
        </Card>
    )
}
