export const CONFIG = {
    path: {
        login: "/",
        register: '/register',
        dashboard: '/dashboard',
        logout: '/logout'
    }
}

export const IMAGE_ALT = {
    LOGO_IMAGE: 'logo image'
}

export const API_URL = {
    DASHBOARD: '/dashboard',
    LOGIN: '/login',
    LOGOUT: '/logout',
    REGISTER: '/register'
}

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST'
}

export const HTTP_CODES = {
    REQUEST_SUCCEEDED: 200,
    BAD_REQUEST: 400,
    UNPROCESSABLE_ENTITY : 422,
}

export const REGEX = {
    PHONE_NUMBER: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
}