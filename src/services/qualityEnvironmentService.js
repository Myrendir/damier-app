import axios from "axios";
import {QUALITY_ENVIRONMENT} from "../config/constantURL";

export default async function get_quality_environment(endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: QUALITY_ENVIRONMENT,
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