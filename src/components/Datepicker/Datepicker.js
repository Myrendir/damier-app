import {TextField} from "@mui/material";
import {useStore} from "react-context-hook";

export default function Datepicker(props) {
    const [date, setDate] = useStore("date", "");
    console.log(date)
    const dateNow = new Date().toISOString().split('T')[0];
    return (
        <TextField
            id="date"
            type="date"
            sx={{width: '80%'}}
            onChange={e => setDate(e.target.value)}
            defaultValue={dateNow}
        />
    )
}