import axios from "axios";
import {HUMAN_RESSOURCES} from "../config/constantURL";

export default async function get_human_ressources(endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: HUMAN_RESSOURCES,
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