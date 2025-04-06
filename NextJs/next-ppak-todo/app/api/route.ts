// export const dynamic = 'force-static';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // });
  // const data = await res.json();

  // return Response.json({ data });

  const response = {
    message: '호호호',
    data: '오늘도 빡코딩!!',
  };

  return NextResponse.json(response, { status: 200 });
}
