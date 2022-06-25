import { Link } from "react-router-dom";
// import dummy from "../db/data.json" //더미 데이터 불러오기
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    
    const days = useFetch('http://localhost:3001/days')

    // const [days, setDays] = useState([])

    // // Click 이벤트를 하나 만들고 클릭할 때 마다 state를 변경시키기
    // const [count, setCount] = useState(0);

    // // 실행되면 Count를 1씩 증가시킨다.
    // function onClick() {
    //     setCount(count + 1);
    // }

    // function onClick2() {
    //     // days의 상태 값 변경
    //     setDays([
    //         // 현재 배열
    //         ...days,
    //         // 기존 배열에 한개씩 day를 추가
    //         {
    //             id : Math.random(),
    //             day : 1


    //         }
    //     ])
    // }

    // useEffect(() => {
        

    //     // console.log("Count change");

    //     // 두 번째 매개 변수로 배열 추가
    // }, []); 
    // // }, [count]); // count로 변경되었을 때만 함수 실행
    

    // // console.log(dummy);

    // useEffect(() => {
    //     // api 비동기 통신을 위해 fetch 이용
    //     fetch('http://localhost:3001/days') // Promise 반환
    //     .then(res => { // response는 http 응답이고 실제 json은 아니다.
    //         return res.json(); // 그래서 json 메서드를 사용해준다. // 이렇게 하면 json으로 변환되고 Promise를 반환한다.
    //     })
    //     // 데이터 받기
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []); 

    // days의 length가 0이면
    if(days.length === 0) {
        // Loging... 보여주기
        return <span>Loading...</span>
    }

    return ( 
        <>
    <ul className="list_day">
        {/* {dummy.days.map(day => ( */}
        {days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
    </ul>
    {/* <button onClick={onClick}>{count}</button>
    <button onClick={onClick2}>Day change</button> */}
    </>
    );
}