import { useState } from "react"

export default function Word({word}) {

    // 뜻이 보였다가 숨겨졌다가 하는 기능
    // 처음에는 뜻이 안보이게 초기값을 flase로 준다. 
    const [isShow, setIsShow] = useState(false);

    const [isDone, setIsDone] = useState(word.isDone);

    // 버튼을 눌렀을 때 실행되는 함수 만들기
    // 이 함수가 실행이 되면 isShow가 true였으면 false가 되고 false였으면 true로 변한다.
    function toogleShow() {
        setIsShow(!isShow)
    }

    function toogleDone() {
        setIsDone(!isDone);
    }

    return (
        <tr className={isDone ? 'off' : ''}>
        <td><input type="checkbox" checked={isDone} onChange={toogleDone}/></td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toogleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>

    );
}

/**
 * 
 * REST API
 * uri 주소와 메서드로 CRUD요청을 하는 것
 * 
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 */

