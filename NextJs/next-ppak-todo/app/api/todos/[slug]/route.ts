import { NextRequest, NextResponse } from 'next/server';
import { fetchATodo, deleteATodo, editATodo } from '@/data/firestore';

// 할일 단일 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;

  // const search = searchParams.get('search');
  const query = searchParams.get('query');

  const fetchedTodo = await fetchATodo(params.slug);

  // 데이터가 없을 때
  if (fetchedTodo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    message: '단일 할일 가져오기 성공!',
    data: {
      fetchedTodo,
    },
  };

  return NextResponse.json(response, { status: 200 });
}

// 할일 단일 삭제 (id 존재해야함)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const deletedTodo = await deleteATodo(params.slug);

  if (deletedTodo === null) {
    return new Response(null, { status: 204 });
  }

  // const searchParams = request.nextUrl.searchParams;

  // const search = searchParams.get('search');
  // const query = searchParams.get('query');

  const response = {
    message: '단일 할일 삭제 성공!',
    data: deletedTodo,
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

  const editedTodo = await editATodo(params.slug, { title, is_done });

  // 데이터가 없을 때
  if (editedTodo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    message: '단일 할일 수정 성공!',
    data: editedTodo,
  };

  // 데이터가 없다 -> 보통 204
  return NextResponse.json(response, { status: 200 });
}
