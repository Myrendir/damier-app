import axios from "axios";
import {COMMERCIAL} from "../config/constantURL";

export default async function get_commercial(endDate) {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: endDate === undefined ? COMMERCIAL : (COMMERCIAL + "/date/" + endDate)
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
    return null;
}