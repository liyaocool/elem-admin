var express = require('express');
var router = express.Router();
import * as user from '../js/user'

router.get('/get_user', user.getUser);

module.exports = router;
