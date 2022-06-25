import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";

export default function CreateDay() {

    const days = useFetch("http://localhost:3001/days");

    const navigate = useNavigate();

    function addDay() { 

        fetch(`http://localhost:3001/days/`, { 
            method: "POST", // 새로운 단어 생성
            headers : {
                'Content-Type' : 'application/json', // 'Content-Type'은 보내는 리소스의 타입을 의미한다. 평범한 문자열부터 html, 이미지 등 여러가지가 있다.
            },           

            // 단순히 가지고 오는 GET과는 다르게 PUT은 수정을 위한 정보들을 실어서 보내준다. 이것을 body에 입력한다.
            body: JSON.stringify({ // JSON문자열로 변환하기 위해 JSON.stringify로 감싸준다.            
                day : days.length +1 // 현재 날짜에 +1 해준다.
            }),          
        }).then(res => { // 응답을 받아서
            if(res.ok) { // 응답이 ok면 
                alert("생성이 완료 되었습니다."); // alert를 띄워준다.

                // useNavigate로 생성한 navigate에 주소로 push해주면 해당 페이지로 이동한다.
                // link to 처럼 a 태그를 사용하지 않고 페이지 전환시킬 때 사용할 수 있다.
                navigate(`/`); // 첫 번재 페이지로 이동한다.
            }
        });
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}