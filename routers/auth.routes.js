const {Router} = require("express")

const router = Router()

const data = {
  user: 'Nick',
  age: '47'
}

router.get('/request', async (req, res) => {
  try {
    console.log('GET DATA');
    return res.json({message: '/auth/request GET OK', ...data});
  } catch (e) {
    console.log(`/auth/request error: ${e}`);
  }
})

router.post('/request', async (req, res) => {
  try {
    console.log('POST DATA', req.body);
    return res.json({message: '/auth/request POST OK', ...data});
  } catch (e) {
    console.log(`/auth/request error: ${e}`);
  }
})

module.exports = router