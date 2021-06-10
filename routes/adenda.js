const { Router } = require('express');
const router = Router();
const { ctrl_addAdenda} = require('../controllers/adenda');
const { multer } = require('../middlewares/multer');


router.post('/addAdenda/:po', multer.array('file'), ctrl_addAdenda);


module.exports = router