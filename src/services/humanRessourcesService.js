import axios from "axios";
import {HUMAN_RESSOURCES} from "../config/constantURL";

export default async function get_human_ressources(startDate, endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: HUMAN_RESSOURCES,
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