import * as Axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const [item, setItem] = useState({});

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    function getData() {
        Axios.get(API_URL).then((res) => {
            setItem(res.data);
        });
    }

    useEffect(() =>{
        // 만약에 아이디가 있고 아이디가 0보다 크면
        if (id && id > 0){
            // 데이터를 호출
        getData();
        };
    }, [id]);

    return <Item item={item} />
};

export default Post;