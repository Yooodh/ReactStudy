export default (req, res) => {
  res.dtatusCode = 200;
  res.json({ id: req.query.id });
}
