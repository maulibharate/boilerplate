const error = {
    Invalid_Credentials: {
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid Credentials',
    },
    User_Not_Found: {
        code: 'USER_NOT_FOUND',
        message: 'User Not Found'
    },
    Token_Not_Found: {
        code: 'TOKEN_NOT_FOUND',
        message: 'Jwt token not found',
    },
    Invalid_Request_Data: {
        code: 'INVALID_REQUEST_DATA',
        message: 'Request field is invalid, missing or not found',
    },
    Email_Already_Exists: {
        code: 'EMAIL_ALREADY_EXISTS',
        message: 'Email already exist',
    },
    Password_Do_Not_Match: {
        code: 'PASSWORD_DO_NOT_MATCH',
        message: 'Password do not match',
    },
}

module.exports = error;