const express = require("express");
const { buyCredits } = require("../controllers/paymentController");
const router = express.Router();

router.post("/buy-credits", buyCredits);

module.exports = router;
