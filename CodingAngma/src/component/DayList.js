import { Link } from "react-router-dom";
import dummy from "../db/data.json" //더미 데이터 불러오기

export default function DayList() {

    console.log(dummy);

    return ( 
    <ul className="list_day">
        {dummy.days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
    </ul>
    );
}