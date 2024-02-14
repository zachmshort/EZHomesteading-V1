// Importing jwtDecode function from jwt-decode library
import { jwtDecode } from "jwt-decode";

// AuthService class definition
class AuthService {
  // Method to retrieve user profile from token stored in localStorage
  getProfile() {
    return jwtDecode(this.getToken());
  }

  // Method to check if a user is logged in
  loggedIn() {
    const token = this.getToken();
    // Check if token exists and is not expired
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  // Method to store the token in localStorage and redirect to home page
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
