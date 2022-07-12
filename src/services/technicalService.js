import axios from "axios";
import {TECHNICAL} from "../config/constantURL";

export default async function get_technical(startDate, endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: TECHNICAL,
            params: {
                startDate: startDate,
                endDate: endDate
            }
        });

        return response.data.data[0];
    } catch (error) {
        console.error(error);
    }
    return null;
}