import axios from "axios";

export default axios.create({
    // UPDATE THIS NGROK ADDRESS EVERY 8 HOURS
    baseURL: 'http://0fc1b53d28d6.ngrok.io'
});