// import dummy from "../db/data.json";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 쓴다.
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day () {
    //dummy.words
    const { day } = useParams(); // useParams를 이용해서 주소창에 있는 문자열이 들어온다.
    // const wordList = dummy.words.filter(word => word.day === Number(day)); // 단어들에 필터를 걸어서 단어의 날짜 1로 만들기

    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     // api 비동기 통신을 위해 fetch 이용
    //     fetch(`http://localhost:3001/words?day=${day}`) // Promise 반환
    //     .then(res => { // response는 http 응답이고 실제 json은 아니다.
    //         return res.json(); // 그래서 json 메서드를 사용해준다. // 이렇게 하면 json으로 변환되고 Promise를 반환한다.
    //     })
    //     // 데이터 받기
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, [day]); // 의존성 배열에 값을 넣어주게 되면 이 값이 최신 값이라고 보장받을 수 있다.

    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
    <>
    <h2>Day {day}</h2>
    {/* days의 length가 0이면 Loading... 보여주기 */}
    {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {/* {wordList.map(word => ( // 1일치만 반복 */}
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
    );
}