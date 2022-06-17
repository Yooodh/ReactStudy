import Axios from 'axios';
import Head from 'next/head'
import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import { Divider } from 'semantic-ui-react';
import { Loader } from 'semantic-ui-react';

export default function Home({list}) {

  // const [list, setList] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = 
  // "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  // process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);

  //     // api호출이 끝나고 isLoding을 false로 바꾼다.
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
  <div>
    <Head>
      <title>Home | 코딩앙마</title>
      <meta name='description' content='코딩 앙마 홈입니다.'></meta>
    </Head>
    {/* {isLoading && (
      <div style={{padding: "300px 0"}}>
        <Loader inline="centered" active>
          Loading
        </Loader>
      </div>
    )}
    {!isLoading && ( */}
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
    {/* )} */}
  </div>
  )
}

export async function getStaticProps() {

  const apiUrl = process.env.apiUrl;

  const res = await Axios.get(apiUrl);

  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}