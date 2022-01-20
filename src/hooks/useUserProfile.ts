import { useQuery } from 'react-query'
import { gql, request } from 'graphql-request'
import { useMemo } from 'react'

type Link = {
    title: string
    link: string
}

type UserData = {
    user: User
}

type User = {
    user: string // TODO: going to change this to username... or display name
    links: Array<Link>
}

export function useUserProfile() {
    const queryResponse = useQuery<UserData, Error>('userProfile', async () => {
        const response = await request(
            process.env.REACT_APP_GRAPHQL_ENDPOINT || '',
            gql`
                query {
                    user(user: "WillParrCodes") {
                        user
                        links {
                            title
                            link
                        }
                    }
                }
            `
        )
        return response
    })
    return useMemo(() => {
        console.log(queryResponse)
        return queryResponse
    }, [queryResponse])
}
