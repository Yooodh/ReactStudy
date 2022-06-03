import dummy from "../db/data.json" //더미 데이터 불러오기

export default function DayList() {

    console.log(dummy);

    return( <ul className="list_day">
        {dummy.days.map(day => (
            <li key={day.id}>Day {day.day}</li>
        ))}
    </ul>
    );
}