import axios from "axios";
import {HUMAN_RESSOURCES} from "../config/constantURL";

export default async function get_human_ressources() {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: HUMAN_RESSOURCES,
            params: {
                startDate: '2021-06-01'
            }
        });

        return response.data.data[0];
    } catch (error) {
        console.error(error);
    }
    return null;
}