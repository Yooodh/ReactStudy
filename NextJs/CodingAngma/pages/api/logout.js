export default (req, res) => {

  // 쿠키 만들기
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure"); // 쿠키 이름;시간; // Max-Age = 0 이면 즉시 쿠키가 소멸된다.
  res.statusCode = 200;
  res.json({ message: "ok" });
};
