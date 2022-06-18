export default (req, res) => {
  // res.dtatusCode = 200;
  // res.json({ name: null });

  // 쿠키 만들기
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure"); // 쿠키 이름;시간;
  res.statusCode = 200;
  res.json({ message: "ok" });
}
