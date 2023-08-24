const router = require("express").Router()
const { isAuthenticated } = require("../middleware/jwt.middleware")

router.use("/auth", require("./auth.routes"))
router.use("/favourites", isAuthenticated, require("./favourites.routes"))

require("../error-handling/index")(router)

module.exports = router
