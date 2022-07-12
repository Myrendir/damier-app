import axios from "axios";
import {QUALITY_ENVIRONMENT} from "../config/constantURL";

export default async function get_quality_environment(startDate, endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: QUALITY_ENVIRONMENT,
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