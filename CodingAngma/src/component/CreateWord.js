import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days"); // days 불러오기

    const navigate = useNavigate();

    function onSubmit(e) { // onSubmit 함수 생성해서 <form>에 연결해준다.
        // 기본기능 막아주기
        e.preventDefault(); // 버튼을 눌러도 새로고침 되지 않는다.

        // current 속성을 이용하면 해당요소에 접근할 수 있고, value는 input에 입력된 값을 얻을 수 있다.
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        // 새로운 단어 생성하기
        fetch(`http://localhost:3001/words/`, { // words 까지만 입력
            method: "POST", // 새로운 단어 생성
            headers : {
                'Content-Type' : 'application/json', // 'Content-Type'은 보내는 리소스의 타입을 의미한다. 평범한 문자열부터 html, 이미지 등 여러가지가 있다.
            },
            
            // 단순히 가지고 오는 GET과는 다르게 PUT은 수정을 위한 정보들을 실어서 보내준다. 이것을 body에 입력한다.
            body: JSON.stringify({ // JSON문자열로 변환하기 위해 JSON.stringify로 감싸준다.       
                // current 속성을 이용하면 해당요소에 접근할 수 있고, value는 input에 입력된 값을 얻을 수 있다.        
                day : dayRef.current.value, 
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),          
        }).then(res => { // 응답을 받아서
            if(res.ok) { // 응답이 ok면 
                alert("생성이 완료 되었습니다."); // alert를 띄워준다.

                // useNavigate로 생성한 navigate에 주소로 push해주면 해당 페이지로 이동한다.
                // link to 처럼 a 태그를 사용하지 않고 페이지 전환시킬 때 사용할 수 있다.
                navigate(`/day/${dayRef.current.value}`)
            }
        });
    }

    // 영어, 한국어, day 초기값은 null
    // 각 태그에 Ref를 연결해주면 DOM 요소가 생성된 후 접근할 수 있다.
    const engRef = useRef(null); // useRef는 DOM에 접근할 수 있게 해준다. 스크롤 위치를 확인하거나 포커스를 주거나 할때 사용한다.
    const korRef = useRef(null); 
    const dayRef = useRef(null); 

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>  {/*각 태그에 Ref를 연결해준다. */}
        </div>
        <div className="input_area">
            <label>kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/> {/*각 태그에 Ref를 연결해준다. */}
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}> {/*각 태그에 Ref를 연결해준다. */}
                {/* map을 이용해서 넣어주기 */}
                {days.map(day => (
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                ))}
            </select>
        </div>
        <button>저장</button> {/* 저장 버튼을 클릭하는 시점은 랜더링 결과가 DOM에 반영 된 이후. */}
    </form>
    );
}