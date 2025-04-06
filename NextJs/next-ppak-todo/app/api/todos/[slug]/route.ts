import { NextRequest, NextResponse } from 'next/server';

// 할일 단일 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;

  // const search = searchParams.get('search');
  const query = searchParams.get('query');

  const response = {
    message: '단일 할일 가져오기 성공!',
    data: {
      id: params.slug,
      title: '오늘도 빡코딩!',
      is_done: false,
      // query: query,
      query,
    },
  };

  return NextResponse.json(response, { status: 200 });
}

// 할일 단일 삭제 (id 존재해야함)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // const searchParams = request.nextUrl.searchParams;

  // const search = searchParams.get('search');
  // const query = searchParams.get('query');

  const response = {
    message: '단일 할일 삭제 성공!',
    data: {
      id: params.slug,
      title: '오늘도 빡코딩!',
      is_done: false,
      // query: query,
      // query,
    },
  };

  // 데이터가 없다 -> 보통 204
  return NextResponse.json(response, { status: 200 });
}

// 할일 단일 수정 (id 존재해야함)
export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // const searchParams = request.nextUrl.searchParams;

  // const search = searchParams.get('search');
  // const query = searchParams.get('query');

  const { title, is_done } = await request.json();

  const editedTodo = {
    id: params.slug,
    // key와 data가 같으면 빼도 된다
    // title:title,
    title,
    is_done,
  };

  const response = {
    message: '단일 할일 수정 성공!',
    data: editedTodo,
  };

  // 데이터가 없다 -> 보통 204
  return NextResponse.json(response, { status: 200 });
}
