import { Button, Grid } from '@mui/material'
import { useUserProfile } from './hooks/useUserProfile'
import { LinkCard } from './LinkCard'
import { Actions, useLinks } from './useLinks'

export type LinkObj = {
    id: string
    linkTitle: string
    link: string
}

export function LinkLayout() {
    const { state, dispatch } = useLinks()

    const castState = state as Array<LinkObj>
    const { data, isLoading } = useUserProfile()
    console.log(data?.user.user)

    function handleRemoveLink(id: string) {
        dispatch({
            type: Actions.REMOVE_LINK,
            payload: {
                id: id,
            },
        })
    }

    function handleEditTitle(e: string, id: string) {
        // get the link before
        const [prevLink] = castState.filter((link) => link.id === id)
        const newLink = {
            id: prevLink.id,
            link: prevLink.link,
            linkTitle: e,
        }
        dispatch({
            type: Actions.EDIT_LINK,
            payload: newLink,
        })
    }

    function handleEditLink(e: string, id: string) {
        // get the link before
        const [prevLink] = castState.filter((link) => link.id === id)
        const newLink = {
            id: prevLink.id,
            link: e,
            linkTitle: prevLink.linkTitle,
        }
        dispatch({
            type: Actions.EDIT_LINK,
            payload: newLink,
        })
    }

    function handleAddCardContext() {
        const newLink = {
            id: `${Date.now().toString()}-${castState.length}`,
            link: '',
            linkTitle: '',
        }
        dispatch({
            type: Actions.ADD_LINK,
            payload: newLink,
        })
    }

    return (
        <Grid container spacing={2}>
            {!isLoading && (
                <Grid item xs={12}>
                    <h2>{data?.user.user}</h2>
                </Grid>
            )}
            <Grid item xs={12}>
                <Button onClick={handleAddCardContext} variant="outlined">
                    Add a new link with context
                </Button>
            </Grid>
            {castState.map(({ link, linkTitle, id }) => (
                <Grid key={id} item xs={12}>
                    <LinkCard
                        handleEditTitle={handleEditTitle}
                        handleEditLink={handleEditLink}
                        handleRemove={() => handleRemoveLink(id)}
                        id={id}
                        link={link}
                        linkTitle={linkTitle}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
