const {Router} = require("express")
const Operation = require("../model/Operation")

const router = Router()

router.get('/request', async (req, res) => {
  try {
    const operations = await Operation.find({})
    return res.json({message: '/auth/request GET OK', operations});
  } catch (e) {
    console.log(`/auth/request GET error: ${e}`);
  }
})

router.post('/request', async (req, res) => {
  try {
    const operation = new Operation({text: req.body.text})
    await operation.save()
    const operations = await Operation.find({})
    return res.json({message: 'operation has been added', operations});
  } catch (e) {
    console.log(`/auth/request POST error: ${e}`);
  }
})

router.delete('/request/id', async (req, res) => {
  try {
    const operation = await Operation.findByIdAndDelete(req.body.id)
    return res.json({message: 'operation has been deleted', operation});
  } catch (e) {
    console.log(`/auth/request/id DELETE error: ${e}`);
  }
})

module.exports = router