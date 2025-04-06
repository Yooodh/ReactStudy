import { NextRequest, NextResponse } from 'next/server';
import dummyTodos from '@/data/dummy.json';

// 모든 할일 가져오기
export async function GET(request: NextRequest) {
  const response = {
    message: 'todos 몽땅 가져오기',
    data: dummyTodos,
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

  const newTodo = {
    id: '10',
    // key와 data가 같으면 빼도 된다
    // title:title,
    title,
    is_done: false,
  };

  const response = {
    message: '할일 추가 성공!',
    data: newTodo,
  };

  // 새로 만든 staus는 보통 201
  return Response.json(response, { status: 201 });
}
