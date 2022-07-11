import axios from "axios";
import {COMMERCIAL} from "../config/constantURL";

export default async function get_commercial() {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: COMMERCIAL,
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