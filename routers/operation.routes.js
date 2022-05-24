const {Router} = require("express")
const Operation = require("../model/Operation")

const router = Router()

router.get('/list', async (req, res) => {
  try {
    const operations = await Operation.find({})
    return res.json({message: '/auth/operation/list GET OK', operations});
  } catch (e) {
    console.log(`/api/operation/list GET error: ${e}`);
  }
})

router.post('/item', async (req, res) => {
  try {
    const operation = new Operation({
      date: req.body.date,
      value: req.body.value,
      adding: req.body.adding
    })
    await operation.save()
    const operations = await Operation.find({})
    return res.json({message: 'operation has been added', operations});
  } catch (e) {
    console.log(`/api/operation/item POST error: ${e}`);
  }
})

router.delete('/id', async (req, res) => {
  try {
    const operation = await Operation.findByIdAndDelete(req.body.id)
    console.log(operation, req.body)
    return res.json({message: 'operation has been deleted', operation});
  } catch (e) {
    console.log(`/api/operation/id DELETE error: ${e}`);
  }
})

module.exports = router