class AuthenticatedService {

    registerSuccessfulLogin(user, password) {
        sessionStorage.setItem("user", user);
        sessionStorage.setItem("password", password);
    }

    logout() {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("password");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("user");
        console.log(user);
        if (user === null)
            return false;
        return true;
    };
}

export default new AuthenticatedService();