const {Router} = require("express")

const router = Router()

const DATA = {
  user: 'Nick',
  age: '47'
}

router.get('/request', async (req, res) => {
  try {
    console.log('send DATA');
    return res.json({message: '/auth/request OK', data: DATA});
  } catch (e) {
    console.log(`/auth/request error: ${e}`);
  }
})

module.exports = router