import axios from "axios";
import {TECHNICAL} from "../config/constantURL";

export default async function get_technical(endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: TECHNICAL,
            params: {
                endDate: endDate
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
    return null;
}