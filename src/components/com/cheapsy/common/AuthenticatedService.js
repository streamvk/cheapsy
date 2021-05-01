import axios from "axios";

class AuthenticatedService {



    executeBasicAuthentication(username, password) {

        console.log(username);
        let credentials = {
            username: username,
            password: password
        }

        return axios.post(`http://localhost:8765/authenticate`,credentials)
    }

    createBasicAuthToken(username, password) {

        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerSuccessfulLogin(username, password) {

        sessionStorage.setItem("basicAuthHeader", username);
        this.setupAxiosIntercepter(this.createBasicAuthToken(username, password));
    }

    logout() {
        sessionStorage.removeItem("basicAuthHeader");
    }

    isUserLoggedIn() {
        let username = sessionStorage.getItem("basicAuthHeader");
        if (username === null)
            return false;
        return true;
    }


    setupAxiosIntercepter(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        )
    }
}

export default new AuthenticatedService();