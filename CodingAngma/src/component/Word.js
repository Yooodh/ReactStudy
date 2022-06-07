import { useState } from "react"

// export default function Word(props) {
export default function Word({word: w}) { // props로 넘어온 word를 w라는 새로운 변수명으로 할당할 수 있다.  

    // const [word, serWord] = useState(props.word);
    const [word, setWord] = useState(w);

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
        // setIsDone(!isDone);

        // 체크박스 상태 유지하기
        // PUT 메서드로 "isDone" 빌드 수정하기
        fetch(`http://localhost:3001/words/${word.id}`, { // 주소 word에 단어의 아이디 넣기
            // 두 번째 인자로 객체 넣기
            // 요청에 옵션들을 입력
            method: "PUT",
            headers : {
                'Content-Type' : 'application/json', // 'Content-Type'은 보내는 리소스의 타입을 의미한다. 평범한 문자열부터 html, 이미지 등 여러가지가 있다.
            },
            
            // 단순히 가지고 오는 GET과는 다르게 PUT은 수정을 위한 정보들을 실어서 보내준다. 이것을 body에 입력한다.
            body: JSON.stringify({ // JSON문자열로 변환하기 위해 JSON.stringify로 감싸준다.               
                ...word, // 기존 데이터에               
                isDone : !isDone, // isDone을 바꿔서 입력해준다.
            }),          
        }).then(res => { // 응답을 받아서
            if(res.ok) { // 응답이 ok면 
                setIsDone(!isDone); // state를 바꿔준다.
            }
        });
    }

    // 단어 삭제하기
    function del() {
        if(window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if(res.ok){ // 삭제가 되면
                    setWord({id:0}); // word의 id를 0으로 바꿔준다.
                }
            });
        }
    }

    if (word.id === 0) { // word의 id가 0이면
        return null; // null을 리턴해준다.
    }

    return (
        <tr className={isDone ? 'off' : ''}>
        <td><input type="checkbox" checked={isDone} onChange={toogleDone}/></td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toogleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
            <button onClick={del} className="btn_del">삭제</button>
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

