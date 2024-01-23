export default function authHeader() {
    const userString = localStorage.getItem("user");
    if (userString === null) {
        // Handle the case where "user" key is not present in localStorage
        return {};
    }
    const user = JSON.parse(userString);
    console.log("Header user:", user);
    console.log("Header user token:", user.token);
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token }
    } else {
        return {};
    }
}