import * as Axios from 'axios';
import Head from 'next/head'
import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import { Divider } from 'semantic-ui-react';
import { Loader } from 'semantic-ui-react';

export default function Home() {

  const [list, setlist] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then(res => {
      console.log(res.data);
      setlist(res.data);

      // api호출이 끝나고 isLoding을 false로 바꾼다.
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  },[])

  return (
  <div>
    <Head>
      <title>Home | 코딩앙마</title>
      <meta name='description' content='코딩 앙마 홈입니다.'></meta>
    </Head>
    {isLoading && (
      <div style={{padding: "300px 0"}}>
        <Loader inline="centered" active>
          Loading
        </Loader>
      </div>
    )}
    {!isLoading && (
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    )}
  </div>
  )
}
