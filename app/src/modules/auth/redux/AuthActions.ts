
export enum EAuthType {
    LOGIN = '[auth] LOGIN',
    LOIGN_SUCCESS = '[auth] LOIGN_SUCCESS',
}

export const actionLogin = (email: string, password: string) => ({
    type: EAuthType.LOGIN,
    payload: {email, password}
})

export const actionLoginSuccess = (data: any) => ({
    type: EAuthType.LOIGN_SUCCESS,
    payload: data
})