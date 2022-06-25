import { useEffect, useState } from "react";

// 커스텀 훅 만들기
// 주소 받기
export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // api 비동기 통신을 위해 fetch 이용
        fetch(url) // Promise 반환
        .then(res => { // response는 http 응답이고 실제 json은 아니다.
            return res.json(); // 그래서 json 메서드를 사용해준다. // 이렇게 하면 json으로 변환되고 Promise를 반환한다.
        })
        // 데이터 받기
        .then(data => {
            // 응답받은 data를 setData 해주기
            setData(data);
        });
    }, [url]); // 의존성 배열에 값을 넣어주게 되면 이 값이 최신 값이라고 보장받을 수 있다.

    return data;
}