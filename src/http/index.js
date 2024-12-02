import axios from "axios";
import { baseUrl } from "../Config";

const API=axios.create({
    baseURL: `${baseUrl}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
})
export default API