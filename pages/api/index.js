

export default (req, res) => {
  console.log(req.query);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.send(JSON.stringify({ name: 'hi' }));
};