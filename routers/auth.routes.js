const {Router} = require("express")

const router = Router()

router.get('/request', async (req, res) => {
  try {
    res.json({message: '/auth/request OK'})
  } catch (e) {
    console.log(`/auth/request error: ${e}`)
  }
})

module.exports = router