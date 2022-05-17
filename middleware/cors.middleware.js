function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000, https://counting-server-220515.herokuapp.com/, 'https://counting-client-220515.herokuapp.com")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "*")
  next()
}

module.exports = cors