import dummy from "../db/data.json";
import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 쓴다.
import Word from "./Word";

export default function Day () {
    //dummy.words
    const { day } = useParams();
    const wordList = dummy.words.filter(word => word.day === Number(day)); // 단어들에 필터를 걸어서 단어의 날짜 1로 만들기

    return (
    <>
    <h2>Day {day}</h2>
        <table>
            <tbody>
                
                {wordList.map(word => ( // 1일치만 반복
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
    );
}