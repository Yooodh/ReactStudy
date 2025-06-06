import { NextRequest, NextResponse } from 'next/server';
import dummyTodos from '@/data/dummy.json';
import { fetchTodos, addATodo } from '@/data/firestore';

// 모든 할일 가져오기
export async function GET(request: NextRequest) {
  const fetchedTodos = await fetchTodos();

  const response = {
    message: 'todos 몽땅 가져오기',
    data: fetchedTodos,
  };

  return NextResponse.json(response, { status: 200 });
}

// 할일 추가
export async function POST(request: NextRequest) {
  // const res =await fetch('https://data.mongodb-api.com/...', {
  //   methud: 'POST',
  //   headers: {
  //     'Context-Type': 'application/json',
  //     'API-Key' : process.env.DATA_API_KEY,
  //   },
  //   body: JSON.stringify({time: new Date().toISOString()}),
  // })

  const { title } = await request.json();

  if (title === undefined) {
    const errMessage = {
      message: '할일을 작성해주세요',
    };

    // 서버에서 요청 시 데이터가 없을 때 422
    return NextResponse.json(errMessage, { status: 422 });
  }

  // const newTodo = {
  //   id: '10',
  //   // key와 data가 같으면 빼도 된다
  //   // title:title,
  //   title,
  //   is_done: false,
  // };

  const addedTodo = await addATodo({ title });

  const response = {
    message: '할일 추가 성공!',
    data: addedTodo,
  };

  // 새로 만든 staus는 보통 201
  return Response.json(response, { status: 201 });
}
