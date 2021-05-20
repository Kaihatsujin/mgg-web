import axios from 'axios';

class MGGApi {
    apiBase = "";

    constructor(useStagingApi = false) {
        if(useStagingApi) {
            this.apiBase = "http://localhost:1337/api/v1/";
            console.log(`[MGGApi] Api Base: Staging`);
        } else {
            this.apiBase = "https://mygarage.games/api/v1/";
            console.log(`[MGGApi] Api Base: Production`);
        }
    }

    async authLogin(username, password) {
        try {
            const response = await axios.post(this.apiBase + 'auth/login', {
                "username": username,
                "password": password
            });

            return response.data;
        } catch(error) {
            switch(error.response.data.name) {
                case "USER_NOT_FOUND":
                    throw new UserNotFoundException(error.response.data.text);
                    break;
                case "AUTHENTICATION_WRONG":
                    throw new AuthenticationWrongException(error.response.data.text);
                    break;
                default:
                    throw new Error(error.response.data.text);
                    break;
            }
        }
    }

    async authVerify(jwtToken) {
        try {
            const response = await axios.post(this.apiBase + 'auth/verify', {
                "token": jwtToken,
            });

            return response.data;
        } catch(error) {
            switch(error.response.data.name) {
                case "AUTHENTICATION_WRONG":
                    throw new AuthenticationWrongException(error.response.data.text);
                    break;
                default:
                    throw new Error(error.response.data.text);
                    break;
            }
        }
    }
}

class UserNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "UserNotFoundException";
    }
}

class AuthenticationWrongException extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationWrongException";
    }
}

export default MGGApi;