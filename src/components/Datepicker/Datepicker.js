import {TextField} from "@mui/material";
import {useStore} from "react-context-hook";

export default function Datepicker(props) {
    const [date, setDate] = useStore("date", "");

    return (
        <TextField
            id="date"
            type="date"
            sx={{width: '80%'}}
            onChange={e => setDate(e.target.value)}
        />
    )
}