import dummy from "../db/data.json";

export default function Day () {
    //dummy.words
    const day = 1;
    const wordList = dummy.words.filter(word => word.day === day); // 단어들에 필터를 걸어서 단어의 날짜 1로 만들기
    console.log(wordList);

    return (
    <>
        <table>
            <tbody>
                
                {wordList.map(word => ( // 1일치만 반복
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    );
}