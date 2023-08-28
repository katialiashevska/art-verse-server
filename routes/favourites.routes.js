const router = require("express").Router()
const Favourite = require("./../models/Favourite.model")
const { isAuthenticated } = require("./../middleware/jwt.middleware")

// GET /favourites - Retrieve favourites for the logged-in user
router.get("/", isAuthenticated, (req, res, next) => {
    Favourite.find({ user: req.payload._id })
        .then(allFavourites => {
            res.json(allFavourites)
        })
        .catch(error => {
            next(error)
        })
})

// POST /favourites - Create a new favourite artwork for the logged-in user
router.post("/", isAuthenticated, (req, res, next) => {
    Favourite.create({
        user: req.payload._id,
        title: req.body.title,
        artist: req.body.artist,
        date: req.body.date,
        medium: req.body.medium,
        dimensions: req.body.dimensions,
        altText: req.body.altText,
        image: req.body.image,
        comment: req.body.comment,
    })
        .then(createdFavourite => {
            res.status(201).json(createdFavourite)
        })
        .catch(error => {
            next(error)
        })
})

// router.get("/:favouriteId", (req, res, next) => {
//     const favouriteId = req.params.favouriteId
//     Favourite.findById(favouriteId)
//         .then(foundFavourite => {
//             res.status(200).json(foundFavourite)
//         })
//         .catch(error => {
//             next(error)
//         })
// })

// PUT /favourites/:favouriteId - Edit a comment on each artwork for the logged-in user
router.put("/:favouriteId", isAuthenticated, (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findByIdAndUpdate(favouriteId, { comment: req.body.comment }, { new: true })
        .then(updatedFavourite => {
            if (!updatedFavourite) {
                return res.status(404).json({ message: "Favourite artwork not found." })
            }
            res.status(200).json(updatedFavourite)
        })
        .catch(error => {
            next(error)
        })
})

// DELETE /favourites/:favouriteId - Delete a favourite artwork for the logged-in user
router.delete("/:favouriteId", isAuthenticated, (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findByIdAndDelete({ _id: favouriteId, user: req.payload._id })
        .then(() => {
            res.status(200).json({ message: "Favourite artwork deleted successfully." })
        })
        .catch(error => {
            next(error)
        })
})

module.exports = router
