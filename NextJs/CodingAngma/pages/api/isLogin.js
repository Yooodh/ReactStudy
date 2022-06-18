export default (req, res) => {
  res.dtatusCode = 200;
  res.json({ name: req.cookies.a_name });
}
