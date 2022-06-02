import { useState } from "react";

export default function Hello() {

    // let name = "Mike";

    // 배열의 첫 번째 값은 state(변수명)이고 두 번째 값은 state를 변경해주는 함수
    // setName 함수가 호출 되어서 name이 바뀌면 리액트는 이 컴포넌트를 다시 랜더링 해준다.
    // useState() 괄호 안에는 초기 값이 들어간다.
    // 동일한 컴포넌트라도 state는 각각 관리 된다. 다른 state에 영향을 미치지 않는다.
    const [name, setName] = useState('Mike');

    // Mike일 때는 Jane으로 Jane일 때는 Mike로 바꿔준다.
    // function changeName() {
    //     // name = name === "Mike" ? "Jane" : "Mike";
    //     // const newName = name === "Mike" ? "Jane" : "Mike";

    //     // document.getElementById("name").innerText = name;
    //     // setName(newName);
    //     setName(name === "Mike" ? "Jane" : "Mike");
    // }

    return (
        <div>
            <h2 id="name">{name}</h2>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>Change</button>
        </div>
    );
}