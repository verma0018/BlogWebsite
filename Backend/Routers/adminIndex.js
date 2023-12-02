const express = require("express")

const router = express.Router()

const authRoute = require("./auth")
const storyRoute = require("./story")
const userRoute = require("./user")
const commentRoute = require("./comment")

router.use("/admin/auth",authRoute)
router.use("/admin/story",storyRoute)
router.use("/admin/user",userRoute)
router.use("/admin/comment",commentRoute)


module.exports = router