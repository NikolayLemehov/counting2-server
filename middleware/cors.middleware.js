function cors(req, res, next) {
  const origins = [
    'http://localhost',
    'https://counting-server-220515.herokuapp.com',
    'https://counting-client-220515.herokuapp.com'
  ];

  for(let i = 0; i < origins.length; i++){
    const origin = origins[i];

    if(req.headers.origin.indexOf(origin) > -1){
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  }
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
}

module.exports = cors