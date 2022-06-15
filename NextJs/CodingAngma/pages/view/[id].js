import * as Axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';
import Head from 'next/dist/shared/lib/head';

const Post = ({item}) => {
    // const router = useRouter(); // item을 props로 받아와서 필요 없다.
    // const { id } = router.query; // item을 props로 받아와서 필요 없다.

    // const [item, setItem] = useState({}); // item을 props로 받아와서 필요 없다.

    // const [isLoading, setIsLoading] = useState(true); // item을 props로 받아와서 필요 없다.

    // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`; // item을 props로 받아와서 필요 없다.

    // item을 props로 받아와서 필요 없다.
    // function getData() {
    //     Axios.get(API_URL).then((res) => {
    //         setItem(res.data);
    //         setIsLoading(false);
    //     });
    // }

    // item을 props로 받아와서 필요 없다.
    // useEffect(() =>{
    //     // 만약에 아이디가 있고 아이디가 0보다 크면
    //     if (id && id > 0){
    //         // 데이터를 호출
    //     getData();
    //     };
    // }, [id]);

    return (
        <>
            {/* item을 props로 받아와서 필요 없다. */}
            {/* {isLoading ? (
                <div style={{padding: "300px 0"}}>
                    <Loader inline="centered" active>
                        Loading
                    </Loader>
                </div>
            ) : ( */}

            {/* itme이 있는 지 없는 지 확인하기 */}
            {item && (
                <>
                <Head>
                    <title>{item.name}</title>
                    <meta name='description' content={item.description}></meta>
                </Head>
                <Item item={item} />
                </>
            )}
            {/* )} */}
        </>
    )
};

export default Post;

// 서버사이드 랜더링
// getServerSideProps로 서버에서 데이터를 가져와서 주입해시켜다.
export async function getServerSideProps(context) { // context는 여러가지 정보들을 알수가 있는데, params나 요청, 응답 쿼리 등이 담겨서 온다.
    const id = context.params.id; // params에 있는 id 받아오기
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`; // id로 api 호출
    const res = await Axios.get(apiUrl);
    const data = res.data; // 응답 값 받아오기

    return {
        props: {
            item: data, // 받아온 응답 값을 item에 넣어준다.
        },
    };
}