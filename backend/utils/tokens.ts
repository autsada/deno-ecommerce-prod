import {
    create,
    getNumericDate,
    Header,
    Payload,
    Cookies,
    verify,
} from '../deps.ts'

const header: Header = {
    alg: 'HS256',
    typ: 'JWT',
}

export const createRefreshToken = (sessionId: string) => {
    const payload: Payload = {
        sessionId,
        exp: getNumericDate(60 * 60 * 24 * 7), // 7 days
    }

    return create(header, payload, Deno.env.get('TK_REFRESH_KEY')!)
}

export const createAccessToken = (sessionId: string, userId: string) => {
    const payload: Payload = {
        sessionId,
        userId,
        exp: getNumericDate(60 * 5), // 5 mins
    }

    return create(header, payload, Deno.env.get('TK_ACCESS_KEY')!)
}

export const setRefreshToken = (token: string, cookies: Cookies) =>
    cookies.set(Deno.env.get('TK_NAME')!, token, { httpOnly: true, sameSite: true })

export const verifyRefreshToken = async (refreshToken: string) => {
    try {
        const payload = (await verify(
            refreshToken,
            Deno.env.get('TK_REFRESH_KEY')!,
            'HS256'
        )) as {
            sessionId: string
            exp: number
        }

        return payload
    } catch (error) {
        return null
    }
}

export const verifyAccessToken = async (accessToken: string) => {
    try {
        const payload = (await verify(
            accessToken,
            Deno.env.get('TK_ACCESS_KEY')!,
            'HS256'
        )) as {
            sessionId: string
            userId: string
            exp: number
        }

        return payload
    } catch (error) {
        return null
    }
}

export const deleteToken = (cookies: Cookies) =>
    cookies.delete(Deno.env.get('TK_NAME')!)

export const handleTokens = async (
    sessionId: string,
    userId: string,
    cookies: Cookies
) => {
    // Issue a refresh token: long-lived (7 days)
    const refreshToken = await createRefreshToken(sessionId)

    // Set the refresh token in cookies
    setRefreshToken(refreshToken, cookies)

    // Issue an access token: short-lived (5 mins)
    const accessToken = await createAccessToken(sessionId, userId)

    return accessToken
}