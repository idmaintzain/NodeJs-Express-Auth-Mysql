const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const { decode, authenticateJWT, logout } = require('../utils/token');


// 
let refreshTokens = [];

    router.get("/accessPage", authenticateJWT, (req, res) => {
        res.json({ message: "Welcome to application." });
      });


      //logout
      router.post('/logout', logout, (req, res) => {
        const { token } = req.body;
        console.log(token);
        refreshTokens = refreshTokens.filter(token => t !== token);
    
        res.send("Logout successful");
    });


module.exports = router;