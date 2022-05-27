const {Router} = require("express")
const Operation = require("../model/Operation")

const router = Router()

router.get('/list', async (req, res) => {
  try {
    const operations = await Operation.find().sort({"date": 1}).sort({"writingDateTime": 1})
    return res.status(200).json({message: '/api/operation/list GET OK', operations});
  } catch (e) {
    console.log(`/api/operation/list GET error: ${e}`);
  }
})

router.post('/item', async (req, res) => {
  try {
    const operation = new Operation({
      date: req.body.date,
      value: req.body.value,
      adding: req.body.adding,
      writingDateTime: new Date(),
    })
    await operation.save()
    const operations = await Operation.find().sort({"date": 1}).sort({"writingDateTime": 1})
    return res.json({message: 'operation has been added', operations});
  } catch (e) {
    console.log(`/api/operation/item POST error: ${e}`);
  }
})

router.delete('/id', async (req, res) => {
  try {
    const operation = await Operation.findByIdAndDelete(req.body.id)
    return res.json({message: 'operation has been deleted', operation});
  } catch (e) {
    console.log(`/api/operation/id DELETE error: ${e}`);
  }
})

router.patch('/item/id', async (req, res) => {
  try {
    await Operation.findByIdAndUpdate(req.body.data.id, {writingDateTime: new Date()})

    const operations = await Operation.find().sort({"date": 1}).sort({"writingDateTime": 1})
    return res.json({message: 'operation has been update writingDateTime', operations});
  } catch (e) {
    console.log(`/api/operation/item/id PATCH error: ${e}`);
  }
})

module.exports = router