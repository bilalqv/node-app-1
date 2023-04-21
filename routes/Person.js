const express = require('express');
const router = express.Router();
const personRouter = require('../controller/Person');

// router.get('/createTable', personRouter.createTable);
router.get('/all', personRouter.allData);
router.get('/single', personRouter.getSingle);
router.post('/create', personRouter.createRow);

module.exports = router;