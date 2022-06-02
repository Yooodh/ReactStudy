import Hello from './component/Hello';

// // const Hello = function () {
// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;

function Exercise() {

    const name0 = "Tom";
    // const user = {
    //   name: "Jane"
    // }

    const naver = {
        name : "네이버",
        url: "https://naver.com",
    };

    function showName() {
        console.log("Mike");
    }

    function showAge(age) {
        console.log(age);
    }

    // function showText(e) {
    //     console.log(e.target.value);
    // }

    function showText(txt) {
        console.log(txt);
    }

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
        // class는 자바스크립트의 예약어 이기 때문에 className으로 쓴다.
        <div className="App">
        {/* style은 객체로 전달해야 적용된다. */}
        <h1 
            style={{
            // 문자열로 적어준다.
            color: "#f0f",
            // CamelCase로 적어준다.
            backgroundColor : "green"
        }}
        >
            {/* 중괄호 내부에서 변수를 사용할 수 있다. */}
            Hello, {name0}.<p>{2 + 3}</p> {/* 숫자나 문자는 잘 나오지만 boolean 타입이나 객체는 표현하지 못한다. */}
            {/* <p>{user}</p>  에러 발생 */}
        </h1>
        <a href={naver.url}>{naver.name}</a>

        <Hello />
        <div className={styles.box}>App</div>

        <h1 style={{
                    color : '#f00',
                    borderRight : '2px solid #000',
                    marginBottom : '30px',
                    opacity : 1,
            }}>Hello</h1>
            <div className={styles.box} >Hello</div>

            <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button 
                onClick={() => {
                    showAge(10);
                }}
            >
                Show age
            </button>
            {/* <input type="text" onChange={e => {
                console.log(e.target.value);
            }}/> */}

            <input 
                type="text" 
                onChange={e => {
                const txt = e.target.value;
                showText(txt);
            }}
            />
        </div>

        <h2 id="name">{name}</h2>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>Change</button>

        </div>
    );
}

export default Exercise;
