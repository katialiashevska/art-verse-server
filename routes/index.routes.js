const router = require("express").Router()
const { isAuthenticated } = require("../middleware/jwt.middleware")

// router.get("/", (req, res, next) => {
//     res.json("All good in here")
// })

router.use("/auth", require("./auth.routes"))
// router.use("/cohorts", require("./cohorts.routes"))
// app.use("/api", isAuthenticated, taskRouter);

require("../error-handling/index")(router)

module.exports = router
