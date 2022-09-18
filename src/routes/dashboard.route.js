const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const { decode, authenticateJWT, logout } = require('../utils/token');


// 
let refreshTokens = [];

    router.get("/accessPage", authenticateJWT, (req, res) => {
        res.json({ message: "Welcome to application." });
      });


module.exports = router;