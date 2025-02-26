const { Router } = require('express');
const { loginUser, createUser, updateUser, getUser } = require('../../controllers/auth');
const router = Router();

router.post('/login', loginUser);
router.post('/create', createUser);
router.put('/updateUser/:user', updateUser);
router.get('/user/:user', getUser);

module.exports = router;