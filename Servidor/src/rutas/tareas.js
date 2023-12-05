const express = require('express');
const router = express.Router();

router.get('/tareas', (req, res, next) => {
    res.send('API')
})


module.exports = router; 