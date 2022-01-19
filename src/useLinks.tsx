import * as React from 'react'

type LinkContextType = {
    state: Array<LinkData>
    dispatch: React.Dispatch<Action>
}
const LinkContext = React.createContext<LinkContextType | undefined>(undefined)

type LinkData = {
    id: string
    linkTitle: string
    link: string
}

const testLinks = [
    {
        id: `${Date.now().toString()}-1`,
        linkTitle: 'Youtube',
        link: 'https://www.youtube.com/',
    },
    {
        id: `${Date.now().toString()}-2`,
        linkTitle: 'Facebook',
        link: 'https://www.facebook.com/',
    },
    {
        id: `${Date.now().toString()}-3`,
        linkTitle: 'Google',
        link: 'https://www.google.com/',
    },
]

export enum Actions {
    ADD_LINK = 'ADD_LINK',
    EDIT_LINK = 'EDIT_LINK',
    REMOVE_LINK = 'REMOVE_LINK',
}

type AddAction = {
    type: Actions.ADD_LINK
    payload: LinkData
}

type EditAction = {
    type: Actions.EDIT_LINK
    payload: LinkData
}

type RemoveAction = {
    type: Actions.REMOVE_LINK
    payload: { id: string }
}

type Action = AddAction | EditAction | RemoveAction

function linkReducer(state: Array<LinkData>, action: Action) {
    switch (action.type) {
        case 'ADD_LINK': {
            return [...state, action?.payload]
        }
        case 'REMOVE_LINK': {
            return [
                ...state.filter(
                    (linkData) => linkData.id !== action?.payload.id
                ),
            ]
        }
        case 'EDIT_LINK': {
            return [
                ...state.map((link) => {
                    if (link.id === action?.payload.id) {
                        link = {
                            ...action.payload,
                        }
                        return link
                    }
                    return link
                }),
            ]
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function LinkProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(linkReducer, testLinks)
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch }
    return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>
}

function useLinks() {
    const context = React.useContext(LinkContext)
    if (context === undefined) {
        throw new Error('useLink must be used within a LinkProvider')
    }
    return context
}

export { LinkProvider, useLinks }
