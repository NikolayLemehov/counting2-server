const {Router} = require("express")
const Operation = require("../model/Operation")

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
    console.log(`/auth/request GET error: ${e}`);
  }
})

router.post('/request', async (req, res) => {
  try {
    console.log('POST DATA', req.body);
    const operation = new Operation({text: req.body.text})
    await operation.save()
    const operations = await Operation.find({})
    console.log('operations', operations);
    return res.json({message: 'text has been added', operations});
  } catch (e) {
    console.log(`/auth/request POST error: ${e}`);
  }
})

module.exports = router