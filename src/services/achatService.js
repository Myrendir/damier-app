import axios from "axios";
import {ACHAT} from "../config/constantURL";

export default async function get_achat(endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: ACHAT,
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